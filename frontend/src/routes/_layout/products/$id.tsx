import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Tag,
  HStack,
  Divider,
  Spinner,
  IconButton,
  Skeleton,
} from '@chakra-ui/react';
import { createFileRoute, useParams, Link } from '@tanstack/react-router';
import { TimeIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Helmet } from 'react-helmet-async';
import Footer from '../../../components/Common/Footer';

export const Route = createFileRoute('/_layout/products/$id')({
  component: ProductDetails,
});

interface Variant {
  id: string;
  title: string;
  size: string;
  inventory_quantity: number;
  price: string;
  compare_at_price: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  brand: string;
  thumbnail: string;
  images: string[];
  variants: Variant[];
  full_price: string;
  sale_price: string;
  discount: string;
}

// Custom HTML Parser
const ALLOWED_TAGS = ['div', 'span', 'p', 'strong', 'em', 'ul', 'li', 'ol'];
const ALLOWED_ATTRIBUTES = ['class', 'style'];
const ALLOWED_STYLES = {
  color: /^#(0x)?[0-9a-f]+$/i,
  'text-align': /^left$|^right$|^center$/,
  'font-size': /^\d+(?:px|em|rem|%)$/,
};

interface HtmlNode {
  type: 'element' | 'text';
  tag?: string;
  attributes?: Record<string, string>;
  children?: HtmlNode[];
  content?: string;
}

function parseHtml(html: string): React.ReactNode {
  if (!html || typeof html !== 'string') {
    return <Text fontSize="lg" color="gray.700" mb={4}>No description available</Text>;
  }

  try {
    // Tokenize HTML string
    const tokens: string[] = [];
    let current = '';
    let inTag = false;
    let inComment = false;

    for (let i = 0; i < html.length; i++) {
      if (html[i] === '<' && html.slice(i, i + 4) === '<!--') {
        inComment = true;
        i += 3;
        continue;
      }
      if (inComment && html.slice(i, i + 3) === '-->') {
        inComment = false;
        i += 2;
        continue;
      }
      if (inComment) continue;

      if (html[i] === '<' && !inTag) {
        if (current) tokens.push(current);
        current = '<';
        inTag = true;
      } else if (html[i] === '>' && inTag) {
        current += '>';
        tokens.push(current);
        current = '';
        inTag = false;
      } else {
        current += html[i];
      }
    }
    if (current) tokens.push(current);

    // Parse tokens into a node tree
    function parseTokens(tokens: string[], index: { value: number }): HtmlNode[] {
      const nodes: HtmlNode[] = [];

      while (index.value < tokens.length) {
        const token = tokens[index.value].trim();
        index.value++;

        if (!token) continue;

        if (token.startsWith('</')) {
          return nodes;
        } else if (token.startsWith('<') && token.endsWith('>')) {
          const tagMatch = token.match(/^<([a-zA-Z][a-zA-Z0-9]*)([^>]*)>$/);
          if (!tagMatch) continue;

          const [, tag, attrString] = tagMatch;
          if (!ALLOWED_TAGS.includes(tag.toLowerCase())) {
            const children = parseTokens(tokens, index);
            nodes.push(...children);
            continue;
          }

          const attributes: Record<string, string> = {};
          const attrMatches = attrString.matchAll(/([a-zA-Z-]+)(?:="([^"]*)")?/g);
          for (const match of attrMatches) {
            const [, name, value = ''] = match;
            if (ALLOWED_ATTRIBUTES.includes(name.toLowerCase())) {
              if (name === 'style') {
                const styleProps = value
                  .split(';')
                  .filter(Boolean)
                  .map((prop) => prop.trim().split(':').map((s) => s.trim()));
                const validStyles = styleProps
                  .filter(([key, val]) => ALLOWED_STYLES[key]?.test(val))
                  .map(([key, val]) => `${key}: ${val}`);
                if (validStyles.length) {
                  attributes.style = validStyles.join('; ');
                }
              } else {
                attributes[name.toLowerCase()] = value;
              }
            }
          }

          const children = parseTokens(tokens, index);
          nodes.push({
            type: 'element',
            tag: tag.toLowerCase(),
            attributes,
            children,
          });
        } else {
          nodes.push({
            type: 'text',
            content: token
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/&/g, '&amp;')
              .replace(/"/g, '&quot;'),
          });
        }
      }

      return nodes;
    }

    const nodes = parseTokens(tokens, { value: 0 });

    // Convert nodes to React elements
    function nodesToReact(nodes: HtmlNode[]): React.ReactNode[] {
      return nodes
        .map((node, index) => {
          if (node.type === 'text') {
            return node.content ? (
              <Text key={index} as="span" fontSize="lg" color="gray.700">
                {node.content}
              </Text>
            ) : null;
          }
          if (node.type === 'element' && node.tag) {
            const props: Record<string, any> = {
              fontSize: 'lg',
              color: 'gray.700',
              mb: 2,
              ...node.attributes,
            };
            if (node.tag === 'ul' || node.tag === 'ol') {
              props.as = node.tag;
            } else if (node.tag === 'li') {
              props.as = 'li';
            } else {
              props.as = 'div';
            }
            return (
              <Text key={index} {...props}>
                {node.children ? nodesToReact(node.children) : null}
              </Text>
            );
          }
          return null;
        })
        .filter(Boolean);
    }

    const reactNodes = nodesToReact(nodes);
    return reactNodes.length > 0 ? reactNodes : <Text fontSize="lg" color="gray.700" mb={4}>No description available</Text>;
  } catch (err) {
    console.error('Error parsing HTML:', err, 'HTML:', html);
    return <Text fontSize="lg" color="gray.700" mb={4}>Failed to parse description</Text>;
  }
}

function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [topProducts, setTopProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const API_BASE_URL = process.env.API_BASE_URL || 'https://iconluxury.shop';
  const { id } = useParams({ from: '/_layout/products/$id' });

  useEffect(() => {
    const fetchWithRetry = async (url: string, retryCount = 6) => {
      for (let attempt = 1; attempt <= retryCount; attempt++) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 30000);
          const response = await fetch(url, {
            signal: controller.signal,
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            credentials: 'omit',
          });
          clearTimeout(timeoutId);

          if (!response.ok) {
            if (response.status === 404) throw new Error('Resource not found.');
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          return await response.json();
        } catch (err: any) {
          if (err.name === 'AbortError') {
            err.message = 'Request timed out after 30s.';
          }
          if (attempt === retryCount) {
            throw err;
          }
          await new Promise((resolve) => setTimeout(resolve, Math.min(1000 * 2 ** attempt, 10000)));
        }
      }
    };

    const fetchProduct = async () => {
      try {
        const data = await fetchWithRetry(`${API_BASE_URL}/api/v1/products/${id}`);
        console.log('Fetched product data:', data);
        if (!data || typeof data !== 'object') {
          throw new Error('Invalid product data received');
        }
        // Validate variants
        if (data.variants) {
          data.variants = data.variants.filter(
            (v: Variant) =>
              v && typeof v === 'object' && v.id && typeof v.size === 'string' && typeof v.price === 'string'
          );
        } else {
          data.variants = [];
        }
        setProduct(data);
        setError(null);
      } catch (err: any) {
        setError(`Failed to load product: ${err.message || 'Unknown error'}`);
        try {
          const topData = await fetchWithRetry(`${API_BASE_URL}/api/v1/top`);
          console.log('Fetched top products:', topData);
          setTopProducts(topData && Array.isArray(topData) ? topData : []);
        } catch (topErr: any) {
          setError((prev) => `${prev}\nFailed to load top products: ${topErr.message || 'Unknown error'}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  };

  const nextImage = () => {
    if (product?.images?.length) {
      setCurrentImage((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product?.images?.length) {
      setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  if (loading) {
    return (
      <Flex justify="center" align="center" minH="100vh">
        <Spinner size="xl" color="yellow.400" />
      </Flex>
    );
  }

  if (error || !product) {
    return (
      <Box textAlign="center" py={16} color={error ? 'red.500' : 'gray.700'}>
        <Text fontSize="lg" mb={4}>
          {error || `Product not found for ID: ${id}`}
        </Text>
        <Text fontSize="sm" mt={2}>
          Please check your network connection or contact{' '}
          <a href="mailto:support@iconluxury.shop" style={{ color: '#3182CE' }}>
            support@iconluxury.shop
          </a>.
        </Text>
        {topProducts.length > 0 && (
          <Box mt={4}>
            <Text fontSize="md" mb={2}>
              Explore our top products:
            </Text>
            <HStack spacing={2} flexWrap="wrap" justify="center">
              {topProducts.slice(0, 3).map((topProduct) => (
                <Link key={topProduct.id} to={`/products/${topProduct.id}`} style={{ color: '#3182CE' }}>
                  <Tag colorScheme="gray" m={1}>
                    {topProduct.title || 'Untitled Product'}
                  </Tag>
                </Link>
              ))}
            </HStack>
          </Box>
        )}
        <Link
          to="/collections"
          aria-label="breadcrumbs"
          style={{ color: '#3182CE', marginTop: '16px', display: 'inline-block' }}
        >
      Breadcrumbs
        </Link>
      </Box>
    );
  }

  return (
    <Box>
      <Helmet>
        <title>{product.title || 'Product'} | Icon Luxury</title>
        <meta
          name="description"
          content={product.description ? stripHtml(product.description).slice(0, 160) : 'Product description'}
        />
      </Helmet>
      <Box py={16} bg="white">
        <Box maxW="800px" mx="auto" px={4}>
          <Link
            to="/products"
            aria-label="Back to all products"
            style={{
              color: '#3182CE',
              fontWeight: 'medium',
              textDecoration: 'none',
              margin: '8px',
              display: 'block',
            }}
          >
            ← Back to all products
          </Link>
          {product.images?.length > 0 ? (
            <Box position="relative">
              <Image
                src={product.images[currentImage]}
                alt={`${product.title || 'Product'} image ${currentImage + 1}`}
                w="full"
                h="400px"
                objectFit="cover"
                borderRadius="md"
                mb={8}
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/275x350')}
              />
              {product.images.length > 1 && (
                <>
                  <IconButton
                    aria-label="Previous image"
                    icon={<ChevronLeftIcon />}
                    position="absolute"
                    left="8px"
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={prevImage}
                  />
                  <IconButton
                    aria-label="Next image"
                    icon={<ChevronRightIcon />}
                    position="absolute"
                    right="8px"
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={nextImage}
                  />
                </>
              )}
            </Box>
          ) : (
            <Skeleton w="full" h="400px" borderRadius="md" mb={8} />
          )}
          <Flex align="center" mb={4}>
            <Tag colorScheme="gray" mr={4} px={3} py={1} borderRadius="full">
              Product
            </Tag>
            <Text fontSize="sm" color="gray.500">{new Date().toLocaleDateString()}</Text>
            <Flex align="center" ml={4}>
              <TimeIcon mr={1} color="gray.500" boxSize={3} />
              <Text fontSize="sm" color="gray.500">{product.variants?.length || 0} variants</Text>
            </Flex>
            {product.discount && (
              <Tag colorScheme="green" ml={4} px={3} py={1} borderRadius="full">
                {product.discount}
              </Tag>
            )}
          </Flex>
          <Heading as="h1" size="2xl" mb={6} fontWeight="medium" lineHeight="1.3">
            {product.title || 'Untitled Product'}
          </Heading>
          <Text fontSize="xl" color="gray.700" mb={4}>
            {product.sale_price || 'N/A'}{' '}
            {product.full_price && <Text as="s" color="gray.500">{product.full_price}</Text>}
          </Text>
          {product.description ? parseHtml(product.description) : (
            <Text fontSize="lg" color="gray.700" mb={4}>
              No description available
            </Text>
          )}
          <Box mt={8}>
            <Heading as="h2" size="lg" mb={4}>
              Variants
            </Heading>
            <HStack spacing={2} flexWrap="wrap" maxW="100%" gap={2}>
              {product.variants?.length > 0 ? (
                product.variants.map((variant, index) => {
                  console.log('Rendering variant:', index, variant); // Debug variant
                  return (
                    <Tag
                      key={variant.id || `variant-${index}`}
                      colorScheme={variant.inventory_quantity > 0 ? 'gray' : 'red'}
                      variant="subtle"
                      size="md"
                      mb={2}
                    >
                      Size {variant.size || 'N/A'} - {variant.price || 'N/A'}{' '}
                      {variant.inventory_quantity > 0
                        ? `(${variant.inventory_quantity} in stock)`
                        : '(Out of stock)'}
                    </Tag>
                  );
                })
              ) : (
                <Text fontSize="md" color="gray.500">
                  No variants available
                </Text>
              )}
            </HStack>
          </Box>
          <Divider mb={8} />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default ProductDetails;
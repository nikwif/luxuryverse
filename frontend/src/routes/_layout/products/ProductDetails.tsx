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
import parse from 'html-react-parser';
import Footer from '../../../components/Common/Footer';

export const Route = createFileRoute('/_layout/products/ProductDetails')({
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

function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const API_BASE_URL = process.env.API_BASE_URL || 'https://iconluxury.shop';
  const { id } = useParams({ from: '/_layout/products/$id' });

  useEffect(() => {
    const fetchProduct = async (retryCount = 6) => {
      for (let attempt = 1; attempt <= retryCount; attempt++) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 30000);
          const response = await fetch(`${API_BASE_URL}/api/v1/products/${id}`, {
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
            if (response.status === 404) throw new Error('Product not found.');
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          setProduct(data);
          setError(null);
          break;
        } catch (err: any) {
          if (err.name === 'AbortError') {
            err.message = 'Request timed out after 30s.';
          }
          if (attempt === retryCount) {
            setError(`Failed to load product: ${err.message || 'Unknown error'}`);
          } else {
            await new Promise((resolve) => setTimeout(resolve, Math.min(1000 * 2 ** attempt, 10000)));
          }
        } finally {
          if (attempt === retryCount || !error) setLoading(false);
        }
      }
    };

    fetchProduct();
  }, [id]);

  const parseDescription = (description: string) => {
    if (!description || typeof description !== 'string') {
      return <Text fontSize="lg" color="gray.700" mb={4}>No description available</Text>;
    }
    return parse(description, {
      replace: (domNode) => {
        if (domNode.name === 'div' || domNode.name === 'span') {
          return <Text fontSize="lg" color="gray.700" mb={2}>{domNode.children}</Text>;
        }
      },
    });
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % (product?.images.length || 1));
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + (product?.images.length || 1)) % (product?.images.length || 1));

  if (loading) {
    return (
      <Flex justify="center" align="center" minH="100vh">
        <Spinner size="xl" color="yellow.400" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" py={16} color="red.500">
        <Text fontSize="lg">{error}</Text>
        <Text fontSize="sm" mt={2}>
          Please check your network connection or contact{' '}
          <a href="mailto:support@iconluxury.shop" style={{ color: '#3182CE' }}>
            support@iconluxury.shop
          </a>.
        </Text>
        <Link to="/products" aria-label="Back to all products" style={{ color: '#3182CE', marginTop: '16px', display: 'inline-block' }}>
          Back to all products
        </Link>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box py={16} textAlign="center">
        <Text fontSize="lg" mb={4}>
          Product not found for ID: {id}
        </Text>
        <Link to="/products" aria-label="Back to all products" style={{ color: '#3182CE' }}>
          Back to all products
        </Link>
      </Box>
    );
  }

  return (
    <Box>
      <Helmet>
        <title>{product.title} | Icon Luxury</title>
        <meta name="description" content={product.description.slice(0, 160)} />
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
          {product.images.length > 0 ? (
            <Box position="relative">
              <Image
                src={product.images[currentImage]}
                alt={`${product.title} image ${currentImage + 1}`}
                w="full"
                h="400px"
                objectFit="cover"
                borderRadius="md"
                mb={8}
                onError={(e) => (e.currentTarget.src = '/fallback-image.png')}
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
              <Text fontSize="sm" color="gray.500">{product.variants.length} variants</Text>
            </Flex>
            {product.discount && (
              <Tag colorScheme="green" ml={4} px={3} py={1} borderRadius="full">
                {product.discount}
              </Tag>
            )}
          </Flex>
          <Heading as="h1" size="2xl" mb={6} fontWeight="medium" lineHeight="1.3">
            {product.title}
          </Heading>
          <Text fontSize="xl" color="gray.700" mb={4}>
            {product.sale_price}{' '}
            {product.full_price && <Text as="s" color="gray.500">{product.full_price}</Text>}
          </Text>
          {product.description ? parseDescription(product.description) : (
            <Text fontSize="lg" color="gray.700" mb={4}>
              No description available
            </Text>
          )}
          <Box mt={8}>
            <Heading as="h2" size="lg" mb={4}>
              Variants
            </Heading>
            <HStack spacing={2} flexWrap="wrap" maxW="100%" gap={2}>
              {product.variants.map((variant) => (
                <Tag
                  key={variant.id}
                  colorScheme={variant.inventory_quantity > 0 ? 'gray' : 'red'}
                  variant="subtle"
                  size="md"
                  mb={2}
                >
                  Size {variant.size} - {variant.price}{' '}
                  {variant.inventory_quantity > 0
                    ? `(${variant.inventory_quantity} in stock)`
                    : '(Out of stock)'}
                </Tag>
              ))}
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
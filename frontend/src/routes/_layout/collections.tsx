import { Box, Text, Image, Grid, Heading, Skeleton } from '@chakra-ui/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';

export const Route = createFileRoute('/_layout/collections')({
  component: CollectionsPage,
});

function CollectionsPage() {
  const [collectionsData, setCollectionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maxDescriptionHeight, setMaxDescriptionHeight] = useState(0);

  const selectedCollections = ['461931184423', '471622844711', '488238383399'];

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const collectionPromises = selectedCollections.map(id =>
          fetch(`https://iconluxury.shop/api/v1/collections/${id}`).then(response => {
            if (!response.ok) {
              throw new Error(`Failed to fetch collection ${id}`);
            }
            return response.json();
          })
        );

        const results = await Promise.allSettled(collectionPromises);

        const collections = results
          .filter(result => result.status === 'fulfilled')
          .map(result => result.value)
          .map(collection => ({
            ...collection,
            productCount: collection.products ? collection.products.length : 0
          }));

        setCollectionsData(collections);

        // Calculate the maximum description height
        const descriptions = collections.map(col => col.description || '');
        const maxHeight = Math.max(...descriptions.map(desc => desc.length)) * 1.5; // Adjust multiplier as needed
        setMaxDescriptionHeight(maxHeight);

        const errors = results
          .filter(result => result.status === 'rejected')
          .map(result => result.reason);

        if (errors.length > 0) {
          console.error('Some collections failed to fetch:', errors);
        }
      } catch (error) {
        console.error('Unexpected error fetching collections:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) {
    return (
      <Box p={4} bg="gray.900" color="white" minH="100vh">
        <Skeleton height="20px" width="200px" mb={6} />
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          {selectedCollections.map((_, index) => (
            <Skeleton key={index} height="300px" />
          ))}
        </Grid>
      </Box>
    );
  }

  if (collectionsData.length === 0) {
    return (
      <Box p={4} bg="gray.900" color="white" minH="100vh">
        <Text>No collections available.</Text>
      </Box>
    );
  }

  return (
    <Box p={4} bg="gray.900" color="white" minH="100vh">
      <Heading fontSize="2xl" mb={6}>Collections</Heading>
      <Link
        to="/products"
        style={{ color: '#3182CE', marginBottom: '16px', display: 'block' }}
        aria-label="Go to products page"
      >
        Go to Products
      </Link>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
        {collectionsData.map((collection) => (
          <Link
            key={collection.id}
            to={`/collections/${collection.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Box
              role="link"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg="white"
              color="gray.900"
              _hover={{ boxShadow: 'md', transform: 'scale(1.02)' }}
              transition="all 0.2s"
            >
              <Image
                src={collection.image || 'https://placehold.co/400x400'}
                alt={collection.title || 'Collection Image'}
                style={{ aspectRatio: '4 / 3', objectFit: 'cover' }}
                w="full"
              />
              <Box p={4}>
                <Text fontWeight="bold" fontSize="xl" mb={2}>
                  {collection.title || 'Untitled Collection'}
                </Text>
                <Box height={`${maxDescriptionHeight}px`} overflow="hidden">
                  <Text fontSize="sm" color="gray.600" noOfLines={2}>
                    {collection.description || 'No description available.'}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}

export default CollectionsPage;
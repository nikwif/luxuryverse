import {
  Box,
  Text,
  Image,
  Grid,
  Heading,
  Skeleton,
  Flex,
  Icon,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { LockIcon } from '@chakra-ui/icons';
import Footer from '@/components/Common/Footer';

export const Route = createFileRoute('/_layout/collections')({
  component: LatestDropsPage,
});

function LatestDropsPage() {
  const selectedDrops = ['461931184423', '471622844711', '488238383399'];
  const [maxDescriptionHeight, setMaxDescriptionHeight] = useState(0);

  const { data: dropsData = { upcoming: [], past: [] }, isLoading } = useQuery({
    queryKey: ['drops', selectedDrops],
    queryFn: async () => {
      const dropPromises = selectedDrops.map(id =>
        fetch(`https://iconluxury.shop/api/v1/collections/${id}`, {
          cache: 'force-cache',
        }).then(res => {
          if (!res.ok) throw new Error(`Failed to fetch drop ${id}`);
          return res.json();
        })
      );
      const results = await Promise.allSettled(dropPromises);
      const pastDrops = results
        .filter(result => result.status === 'fulfilled')
        .map(result => ({
          ...result.value,
          isLocked: false,
        }));

      const errors = results
        .filter(result => result.status === 'rejected')
        .map(result => result.reason);
      if (errors.length > 0) {
        console.error('Some drops failed to fetch:', errors);
      }

      // Add a placeholder for the upcoming locked drop
      const upcomingDrop = {
        id: 'future-1',
        title: 'Upcoming Drop',
        description: '2025-05-01, 10:00 AM until sold out.',
        image: 'https://placehold.co/400x400?text=Locked',
        isLocked: true,
        unlockDate: '2025-05-01',
      };

      return {
        upcoming: [upcomingDrop],
        past: pastDrops,
      };
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
  });

  useEffect(() => {
    const allDrops = [...dropsData.upcoming, ...dropsData.past];
    if (allDrops.length > 0) {
      const descriptions = allDrops.map(col => col.description?.replace(/<\/?strong>/g, '') || '');
      const maxHeight = Math.max(...descriptions.map(desc => desc.length)) * 1.5;
      setMaxDescriptionHeight(maxHeight);
    }
  }, [dropsData.upcoming, dropsData.past]);

  if (isLoading) {
    return (
      <Box p={4} bg="gray.900" color="white" minH="100vh" display="flex" justifyContent="center" alignItems="center">
        <Box maxW={{ base: "1200px", lg: "1600px" }} w="full" px={{ base: 4, md: 8 }} py={0}>
        <Skeleton
              height="20px"
              width="200px"
              mb={6}
              startColor="transparent" // Added
              endColor="rgba(255, 255, 255, 0.1)" // Added
              borderRadius="md"
            />
          <Flex justify="center" gap={8}>
          <Skeleton
  height="200px"
  width={{ base: "100%", md: "33.33%" }}
  startColor="transparent" // Added
  endColor="rgba(255, 255, 255, 0.1)" // Added
  borderRadius="md"
/>
          </Flex>
          <Skeleton
  height="20px"
  width="200px"
  mt={12}
  mb={6}
  startColor="transparent" // Added
  endColor="rgba(255, 255, 255, 0.1)" // Added
  borderRadius="md"
/>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
            {selectedDrops.map((_, index) => (
       <Skeleton
       key={index}
       height="200px"
       startColor="transparent" // Added
       endColor="rgba(255, 255, 255, 0.1)" // Added
       borderRadius="md"
     />
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }

  if (!dropsData.upcoming.length && !dropsData.past.length) {
    return (
      <Box p={4} bg="gray.900" color="white" minH="100vh" display="flex" justifyContent="center" alignItems="center">
        <Text>No drops available.</Text>
      </Box>
    );
  }

  return (
    <Box
      color="white"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box maxW={{ base: "1200px", lg: "1600px" }} w="full" px={{ base: 4, md: 8 }} py={0} pt={{ base: 8, md: 12 }}>
  {/* Upcoming Drops Section */}
  {dropsData.upcoming.length > 0 && (
    <Box mb={16}>
     <VStack spacing={4} textAlign="center">
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          color="white"
        >
          Upcoming
        </Heading>
        <Text fontSize="xl" color="white" mt={12}>
  2025-05-01
  <br />
  <Text as="span" fontSize="lg" color="white">
    10:00 AM -
  </Text>
  <Text as="span" fontSize="lg" color="gray.200">
    {' '}until sold out
  </Text>
  <br />
  <ChakraLink
    as="span"
    color="green.500"
    fontSize="xl"
    fontWeight="bold"
            textDecoration="underline"
            _hover={{ color: "green.400" }}
            onClick={() => console.log("Notify clicked - no action implemented")}
          >
        NOTIFY
          </ChakraLink>

   
        </Text>
      </VStack>
    </Box>
  )}
      {/* Past Drops Section */}
        {dropsData.past.length > 0 && (
          <Box>
            <Heading
              fontSize={{ base: '2xl', md: '3xl' }}
              mb={8}
              textAlign="center"
              color="white"
            >
              Past
            </Heading>
            <Grid templateColumns="1fr" gap={8}>
            {dropsData.past.map(drop => (
              <Box key={drop.id}>
                <Link
                  to={`/collection/${drop.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <VStack
                    bg="gray.900"
                    border="1px solid"
                    borderColor="gray.700"
                    borderRadius="md"
                    p={6}
                    align="start"
                    transition="all 0.3s"
                    _hover={{ transform: "translateY(-4px)", shadow: "lg", borderColor: "green.500" , color: "white" }}
                  >
                    <Heading
                      as="h3"
                      size="xl"
                      mb={4}
                      color="gray.400"
                      textTransform="uppercase"
                      noOfLines={1}
   
                    >
                      {drop.title || 'Untitled Drop'}
                    </Heading>
                    <Text
                      fontSize="lg"
                      color="gray.400"
                      lineHeight="1.5"
                    >
                      {drop.description
                        ? drop.description.replace(/<\/?p>/g, '')
                        : 'No description available.'}
                    </Text>
                  </VStack>
                </Link>
              </Box>
            ))}
          </Grid>
          </Box>
        )}
      </Box>
      <Box w="full" mt={16}>
        <Footer />
      </Box>
    </Box>
  );
}

export default LatestDropsPage;
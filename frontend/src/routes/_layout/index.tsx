import { Box, Button, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/_layout/")({
  component: Home,
});

interface Product {
  id: string;
  title: string;
  thumbnail: string;
  price: string;
}

interface Collection {
  id: string;
  title: string;
  products: Product[];
}

function Home() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/collections")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch collections");
        return res.json();
      })
      .then((data: Collection[]) => setCollections(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('/images/hero-bg.jpg')"
        bgSize="cover"
        bgPosition="center"
        py={{ base: 16, md: 24 }}
        textAlign="center"
      >
        <VStack spacing={6} maxW="800px" mx="auto" px={4}>
          <Heading
            as="h1"
            size={{ base: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            lineHeight="1.2"
          >
            Discover LuxuryVerse
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} opacity={0.9}>
            Your decentralized marketplace for luxury goods. Buy and trade with cryptocurrency.
          </Text>
          <Button
            size="lg"
            colorScheme="purple"
            bgGradient="linear(to-r, purple.500, pink.500)"
            _hover={{ bgGradient: "linear(to-r, purple.600, pink.600)" }}
          >
            Shop Now
          </Button>
        </VStack>
      </Box>

      {/* Featured Collections */}
      <Box py={16} px={{ base: 4, md: 8 }} maxW="1200px" mx="auto">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Featured Collections
        </Heading>
        {error ? (
          <Text textAlign="center" color="red.300">
            {error}
          </Text>
        ) : collections.length === 0 ? (
          <Text textAlign="center" color="gray.400">
            Loading collections...
          </Text>
        ) : (
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={8}
          >
            {collections.flatMap((collection) =>
              collection.products.map((product) => (
                <VStack
                  key={product.id}
                  bg="gray.800"
                  borderRadius="md"
                  p={6}
                  align="start"
                  transition="all 0.3s"
                  _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
                >
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    borderRadius="md"
                    objectFit="cover"
                    h="200px"
                    w="100%"
                    fallbackSrc="/images/placeholder.jpg"
                  />
                  <Text fontSize="lg" fontWeight="bold">
                    {product.title}
                  </Text>
                  <Text color="purple.300">{product.price}</Text>
                  <Button
                    size="sm"
                    colorScheme="purple"
                    variant="outline"
                    w="full"
                    mt={2}
                  >
                    View Details
                  </Button>
                </VStack>
              ))
            )}
          </Grid>
        )}
      </Box>
    </Box>
  );
}
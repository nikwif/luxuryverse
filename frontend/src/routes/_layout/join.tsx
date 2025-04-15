import { createFileRoute } from '@tanstack/react-router';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Container,
  Input,
  FormControl,
  FormErrorMessage,
  Link,
  useToast,
  Image,
  HStack,
  Tooltip,
} from '@chakra-ui/react';
import Footer from '../../components/Common/Footer';
import theme from '../../theme';
import { useState, useContext, useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';
import { AuthContext } from '../../components/Common/TopNav';
import { OpenAPI } from '../../client';

export const Route = createFileRoute('/_layout/join')({
  component: JoinPage,
});

function JoinPage() {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [xProfile, setXProfile] = useState(null);
  const [tokens, setTokens] = useState(null);
  const { user, setJoining, login } = useContext(AuthContext);
  const { address, isConnected } = useAccount();

  const clientId = 'N0p3ZG8yN3lWUFpWcUFXQjE4X206MTpjaQ';
  const redirectUri = 'https://api.iconluxury.today/api/v1/x-auth';
  const stateRef = useRef(Math.random().toString(36).substring(2));
  const xAuthUrl = `https://api.x.com/2/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=users.read%20offline.access&state=${stateRef.current}`;

  useEffect(() => {
    setJoining(true);
    if (isConnected && address && !user) {
      login({ address });
      toast({
        title: 'Wallet Connected',
        description: `Connected as ${address.slice(0, 6)}...${address.slice(-4)}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isConnected, address, user, login, setJoining, toast]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const receivedState = urlParams.get('state');
    const error = urlParams.get('error');

    if (error) {
      toast({
        title: 'X Auth Error',
        description: 'Failed to connect X profile. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }

    if (code && receivedState === stateRef.current) {
      const fetchXProfile = async () => {
        try {
          console.log('OAuth params:', { code, state: receivedState });
          if (!code) {
            throw new Error('No code provided in redirect');
          }
          const payload = { code, redirectUri };
          console.log('Sending to /x-auth/code:', payload);
          const response = await fetch('https://api.iconluxury.today/api/v1/x-auth/code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          if (!response.ok) {
            const errorText = await response.text();
            console.error('Fetch error response:', errorText);
            throw new Error(`Failed to fetch X profile: ${response.status} - ${errorText}`);
          }
          const data = await response.json();
          setXProfile(data.profile);
          setTokens(data.tokens);
          toast({
            title: 'X Profile Connected',
            description: `Logged in as @${data.profile.username}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        } catch (error) {
          console.error('X Auth Error:', error);
          toast({
            title: 'X Auth Error',
            description: `Failed to connect X profile: ${error.message}`,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
        window.history.replaceState({}, document.title, window.location.pathname);
      };
      fetchXProfile();
    }
  }, [toast]);

  const refreshXToken = async () => {
    if (!tokens?.refresh_token) {
      console.log('No refresh token available');
      return;
    }
    try {
      const response = await fetch('https://api.iconluxury.today/api/v1/x-auth/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token: tokens.refresh_token }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Refresh error response:', errorText);
        throw new Error(`Failed to refresh token: ${response.status} - ${errorText}`);
      }
      const newTokens = await response.json();
      setTokens(newTokens);
      console.log('Refreshed tokens:', newTokens);
      return newTokens.access_token;
    } catch (error) {
      console.error('Refresh token error:', error);
      toast({
        title: 'Refresh Token Error',
        description: 'Failed to refresh X token.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (tokens?.access_token) {
      const timeout = setTimeout(() => {
        refreshXToken();
      }, (tokens.expires_in - 300) * 1000);
      return () => clearTimeout(timeout);
    }
  }, [tokens]);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsEmailInvalid(true);
      return;
    }
    setIsEmailInvalid(false);

    try {
      const response = await fetch('https://api.iconluxury.today/api/v1/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          walletAddress: address,
          xUsername: xProfile?.username,
          xProfile,
        }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to subscribe: ${response.status} - ${errorText}`);
      }
      toast({
        title: 'Subscribed',
        description: `Thank you for subscribing with ${email}!`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setEmail('');
      setJoining(false);
      login({ address, xUsername: xProfile?.username, xProfile });
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: 'Subscription Error',
        description: `Failed to subscribe: ${error.message}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg="gray.900" minH="100vh" color="white">
      <Container maxW="1000px" mx="auto" px={4} py={16}>
        <VStack spacing={12} align="start" w="full">
          <Heading as="h1" size={['lg', 'xl']} fontWeight="medium" color="yellow.400">
            Join LuxuryVerse
          </Heading>
          <Text fontSize={['md', 'lg']} color="gray.300">
            Step into a world of exclusive digital collectibles and luxury experiences. Follow these steps to join LuxuryVerse.
          </Text>

          <Box w="full">
            <Heading as="h2" size={['md', 'lg']} fontWeight="medium" mb={4}>
              1. Connect Your Wallet
            </Heading>
            <Text fontSize={['sm', 'md']} mb={4} color="gray.400">
              Connect your crypto wallet for seamless access to LuxuryVerse collectibles.
            </Text>
            <VStack align="start" spacing={4}>
              {!isConnected && <appkit-button />}
              {isConnected && (
                <HStack spacing={4}>
                  <VStack align="start" spacing={1}>
                    <Text fontSize="sm" color="gray.400">
                      0.000 ETH
                    </Text>
                    <Text fontSize="sm" color="gray.400">
                      {address ? `${address.slice(0, 4)}...${address.slice(-6)}` : ''}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      Connected: {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''}
                    </Text>
                  </VStack>
                </HStack>
              )}
              <Text fontSize="sm" mt={2} color="red.300">
                Warning: Always verify you’re on iconluxury.today before connecting your wallet.
              </Text>
            </VStack>
          </Box>

          <Box w="full">
            <Heading as="h2" size={['md', 'lg']} fontWeight="medium" mb={4}>
              2. Follow @LuxuryVerse
            </Heading>
            <Text fontSize={['sm', 'md']} mb={4} color="gray.400">
              Connect your X account to follow @LuxuryVerse and create your collectible profile.
            </Text>
            <Tooltip label="Connect your X account to follow @LuxuryVerse">
              <Button
                as="a"
                href={xAuthUrl}
                bg="yellow.400"
                color="gray.900"
                _hover={{ bg: 'yellow.500' }}
                borderRadius="md"
                px={6}
                py={3}
                fontWeight="medium"
                isDisabled={!isConnected}
              >
                Connect X Profile
              </Button>
            </Tooltip>
            {xProfile && (
              <HStack mt={2} spacing={2}>
                <VStack align="start" spacing={0}>
                  <Text fontSize="sm" color="gray.500">
                    Connected as @{xProfile.username}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    {xProfile.name}
                  </Text>
                </VStack>
              </HStack>
            )}
          </Box>

          <Box w="full">
            <Heading as="h2" size={['md', 'lg']} fontWeight="medium" mb={4}>
              3. Sign Up for Notifications
            </Heading>
            <Text fontSize={['sm', 'md']} mb={4} color="gray.400">
              Enter your email to receive order updates and exclusive offers.
            </Text>
            <form onSubmit={handleEmailSubmit}>
              <FormControl isInvalid={isEmailInvalid} maxW="400px">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bg="gray.800"
                  border="none"
                  color="white"
                  _placeholder={{ color: 'gray.500' }}
                  borderRadius="md"
                  px={4}
                  py={3}
                />
                <FormErrorMessage>Email is invalid.</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                bg="yellow.400"
                color="gray.900"
                _hover={{ bg: 'yellow.500' }}
                borderRadius="md"
                px={6}
                py={3}
                mt={4}
                fontWeight="medium"
                isDisabled={!isConnected || !xProfile}
              >
                Subscribe
              </Button>
            </form>
          </Box>

          <Box w="full">
            <Text fontSize={['sm', 'md']} color="gray.400">
              For more details, see our{' '}
              <Link href="/privacy" color="yellow.400" textDecoration="underline">
                Privacy Policy
              </Link>{' '}
              or contact us at{' '}
              <Link href="mailto:privacy@iconluxury.today" color="yellow.400" textDecoration="underline">
                privacy@iconluxury.today
              </Link>.
            </Text>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}

export default JoinPage;
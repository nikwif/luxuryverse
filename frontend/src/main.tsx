import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { routeTree } from './routeTree.gen';
import { StrictMode } from 'react';
import { OpenAPI } from './client';
import theme from './theme';
import './styles/global.css';
import { WagmiProvider } from 'wagmi';
import { AuthProvider } from './components/Common/TopNav';
import { wagmiConfig, queryClient } from './client/core/appkit';

OpenAPI.BASE = 'https://iconluxury.today';
OpenAPI.TOKEN = async () => localStorage.getItem('access_token') || '';

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  </StrictMode>
);
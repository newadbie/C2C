'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { api } from 'utils/api';
import superjson from 'superjson';
import { getFetch, httpBatchLink, loggerLink } from '@trpc/react-query';

export const TrpcProvider: React.FC<Layout> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } } }));
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: () => true
        }),
        httpBatchLink({
          url: '/api/trpc',
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: 'include'
            });
          }
        })
      ],
      transformer: superjson
    })
  );

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </api.Provider>
  );
};

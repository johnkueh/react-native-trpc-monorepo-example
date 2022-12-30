import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import { trpc } from './trpc';
import { auth } from '../features/auth/firebaseConfig';

type AppProps = {
  children?: React.ReactNode;
};

export const apiBaseUrl = `${Constants.expoConfig?.extra?.apiBaseUrl}/api/trpc`;

export function TRPCProvider({ children }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          // From https://stackoverflow.com/a/74556991
          url: apiBaseUrl,
          // From https://github.com/trpc/trpc/discussions/1686#discussioncomment-3831581
          async headers() {
            const token = (await auth.currentUser?.getIdToken()) || '';
            return token
              ? {
                  Authorization: `Bearer ${token}`,
                }
              : {};
          },
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}

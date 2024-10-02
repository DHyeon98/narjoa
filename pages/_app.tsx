import ErrorFallback from '@/components/error-fallback/error-fallback';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component {...pageProps} />
      </ErrorBoundary>
      <Footer />
    </QueryClientProvider>
  );
}

import '@/styles/globals.css';
import Head from 'next/head';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';

// Initializes React Query
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PILYTIX Test - Peter Yoo</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <div className="h-screen w-screen bg-[#F0F0F0] font-poppins">
            <Component {...pageProps} />
          </div>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

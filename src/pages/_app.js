import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from 'components/Layout';
import Head from 'next/head';
import 'styles/globals.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="robots" content="index,follow" />
          <meta
            name="description"
            content="Receive email notifications for new NFT listings for your desired collection in the Flow blockchain"
            key="description"
          />
          <meta property="keywords" content="Flow, NFT, Alert, Notification, Price" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Flow NFT Alert" key="ogTitle" />
          <meta
            property="og:description"
            content="Receive email notifications for new NFT listings for your desired collection in the Flow blockchain"
            key="ogDescription"
          />
        </Head>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

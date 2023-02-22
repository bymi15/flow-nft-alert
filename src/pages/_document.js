import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/logo512.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800,900&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

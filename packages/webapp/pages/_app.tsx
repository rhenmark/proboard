import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window && typeof window === "object") {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Proboard</title>
        <link rel="shortcut icon" href="/images/logo/proboard-logo.png" />
        <meta name="theme-color" content="red" />
      </Head>
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;

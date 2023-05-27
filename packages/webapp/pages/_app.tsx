import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';
import './styles.css';
import { Analytics } from '@vercel/analytics/react';


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
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/images/logo/proboard-logo.png" />
        <meta name="theme-color" content="#88AF98" />
      </Head>
      <main className="min-h-screen">
        <Component {...pageProps} />
        {
          process.env.NODE_ENV !== "development" && (
            <Analytics />
          )
        }
      </main>
    </>
  );
}

export default CustomApp;

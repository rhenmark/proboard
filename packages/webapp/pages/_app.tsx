import { AppProps } from 'next/app';
import Head from 'next/head';
import { useLayoutEffect } from 'react';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  useLayoutEffect(() => {
    if (window && typeof window === "object") {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Proboard</title>
      </Head>
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;

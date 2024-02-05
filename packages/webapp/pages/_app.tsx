import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';
import './styles.css';
import { Analytics } from '@vercel/analytics/react';
import { Poppins } from 'next/font/google'
import Footer from '../components/footer/Footer';
import PageHeader from '../components/page-header/PageHeader';
import WelcomePrompt from '../components/welcome-prompt/WelcomePrompt';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

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
      <main className={`min-h-screen ${poppins.className}`}>
        <PageHeader />
        <Component {...pageProps} />
        {
          process.env.NODE_ENV !== "development" && (
            <Analytics />
          )
        }
        <Footer />
      </main>
      <WelcomePrompt />
    </>
  );
}

export default CustomApp;

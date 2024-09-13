import Footer from '../components/footer/Footer';
import PageHeader from '../components/page-header/PageHeader';
import WelcomePrompt from '../components/welcome-prompt/WelcomePrompt';
import { Poppins } from 'next/font/google';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './global.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import firebaseAnalytics from '../utils/firebaseAnalytics';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Proboard</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/images/logo/proboard-logo.webp" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=optional"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#88AF98" />
      </head>
      <body className={`${poppins.className} absolute inset-0 bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]`}>
        <PageHeader />
        {children}
        {/* <Footer /> */}
        <WelcomePrompt />
        {process.env.NODE_ENV !== 'development' && (
          <>
            <SpeedInsights />
            <Analytics />
          </>
        )}
      </body>
    </html>
  );
}

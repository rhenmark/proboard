import Footer from '../components/footer/Footer';
import PageHeader from '../components/page-header/PageHeader';
import WelcomePrompt from '../components/welcome-prompt/WelcomePrompt';
import { Poppins } from 'next/font/google'
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

import './global.css'



const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Proboard</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/images/logo/proboard-logo.png" />
        <meta name="theme-color" content="#88AF98" />
      </head>
      <body className={`${poppins.className}`}>
        <PageHeader />
        {children}
        <Footer />
        <WelcomePrompt />
        {process.env.NODE_ENV !== "development" && <Analytics />}

      </body>
    </html>
  )
}

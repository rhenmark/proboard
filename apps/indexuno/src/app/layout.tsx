import './global.css';

export const metadata = {
  title: 'IndexUno',
  description: 'Helping local business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/favicon.png"
        type="image/png"
        sizes="16x16"
      />
      </head>
      <body>{children}</body>
    </html>
  );
}

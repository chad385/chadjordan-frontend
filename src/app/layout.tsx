import type { Metadata } from 'next';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import { getTokens, buildRootCssVariables, googleFontsHref } from '@/lib/theme/tokens';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chad Jordan · Studio — Own the Compound',
  description:
    'A Compound is your whole business behind your own gates — brand, content, CRM, and infrastructure on ground you own, not rent. Built by hand. Made unmistakable.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tokens = getTokens();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={googleFontsHref(tokens)} />
        <style
          id="theme-tokens"
          // Renders design-system/tokens.json as live CSS variables — the
          // single place a token value becomes what the browser paints.
          dangerouslySetInnerHTML={{ __html: `:root{${buildRootCssVariables(tokens)}}` }}
        />
      </head>
      <body className="antialiased">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

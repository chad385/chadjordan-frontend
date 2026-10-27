import type { Metadata } from 'next';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import PageViewTracker from '@/components/analytics/PageViewTracker';
import { getTokens, buildRootCssVariables, googleFontsHref } from '@/lib/theme/tokens';
import './globals.css';

const TITLE = 'Chad Jordan · Studio — Brand work for firms that look smaller than they are';
const DESCRIPTION =
  'Brand work for expert-led firms whose presentation doesn\u2019t match who they are. Twenty years directing brand for companies with budgets, applied to closing the gap between what you\u2019ve done and what a stranger concludes in ninety seconds.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://chadjordan.studio'),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: 'Chad Jordan · Studio', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
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
        <PageViewTracker />
      </body>
    </html>
  );
}

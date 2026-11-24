import type { Metadata } from 'next';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import PageViewTracker from '@/components/analytics/PageViewTracker';
import { getTokens, buildRootCssVariables, googleFontsHref } from '@/lib/theme/tokens';
import { absoluteUrl, configuredSiteUrl, DEFAULT_OG_PATH } from '@/lib/site-url';
import './globals.css';

const SITE = configuredSiteUrl();
const TITLE = 'Chad Jordan · Studio — Brand worlds for firms that do serious, discreet work.';
const DESCRIPTION =
  'Brand worlds for firms that do serious, discreet work. Investigations, forensics, incident response, and high-stakes advisory.';
const OG_IMAGE = absoluteUrl(DEFAULT_OG_PATH, SITE);

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'Chad Jordan · Studio',
    type: 'website',
    url: SITE,
    images: [{ url: OG_IMAGE, alt: 'Chad Jordan · Studio' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
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

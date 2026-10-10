import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: {
    default: 'Presidency Perfumes — The Fragrance Catalogue',
    template: '%s | Presidency Perfumes',
  },
  description: 'Explore the Presidency Perfumes fragrance and attar catalogue. Discover scent profiles, fragrance notes, occasions and available formats.',
  applicationName: 'Presidency Perfumes',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

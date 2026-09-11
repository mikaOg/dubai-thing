import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Ethio Connect to Desert — Danakil & Afar Desert Tours',
    template: '%s | Ethio Connect to Desert',
  },
  description:
    'Small-group desert expeditions across the Danakil Depression, Erta Ale volcano and the Afar salt flats. Book online with local Ethiopian guides.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#c98232',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        {/* Desktop background */}
        <img
          aria-hidden
          src="/tours/hero-4.jpg"
          alt=""
          className="pointer-events-none fixed inset-0 -z-20 hidden h-full w-full object-cover md:block"
        />

        {/* Mobile background (portrait) */}
        <img
          aria-hidden
          src="/tours/hero-4-mobile.jpg"
          alt=""
          className="pointer-events-none fixed inset-0 -z-20 h-full w-full object-cover md:hidden"
        />

        {/* Dark overlay for text contrast */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(26,21,18,0.5) 0%, rgba(26,21,18,0.4) 40%, rgba(26,21,18,0.6) 100%)',
          }}
        />

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

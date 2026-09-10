import type { Metadata } from 'next';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

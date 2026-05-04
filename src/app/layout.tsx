import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Ultascale | Build Bold. Scale Smart. Grow Revenue.',
  description: 'Ultascale is an end-to-end growth partner across product, brand, operations, and revenue acceleration.',
  openGraph: {
    title: 'Ultascale Corporate Website',
    description: 'Premium strategic growth company helping teams build, scale, and grow revenue.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

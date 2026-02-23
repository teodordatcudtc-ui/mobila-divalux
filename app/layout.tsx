import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://mobiladivalux.ro'),
  title: {
    default: `${SITE.name} – ${SITE.shortDescription}`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.shortDescription}. Mobilă de calitate, design contemporan. Contact: ${SITE.phone}.`,
  keywords: ['mobilă', 'mobila divalux', 'mobilier', 'canapele', 'dormitor', 'living', 'magazin mobilă'],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 overflow-x-hidden w-full max-w-full" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

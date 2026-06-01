import { Barlow_Condensed, Bebas_Neue, Fraunces, Manrope } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  BUSINESS_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  localBusinessStructuredData,
} from '@/lib/seo';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-menu-heading',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-menu-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'CalendersGH | Calenders Events Bar & Lounge in Takoradi',
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'CalendersGH',
    'Calenders GH',
    'Calenders Events',
    'Calenders Events Bar & Lounge',
    'Calenders Takoradi',
    'CalendarsGH',
    'Takoradi restaurant',
    'Takoradi event venue',
  ],
  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'CalendersGH | Calenders Events Bar & Lounge in Takoradi',
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_GH',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'CalendersGH restaurant and bar in Takoradi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalendersGH | Calenders Events Bar & Lounge in Takoradi',
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable} ${bebasNeue.variable} ${barlowCondensed.variable} min-h-screen selection:bg-brand-green/20 selection:text-brand-green-dark`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

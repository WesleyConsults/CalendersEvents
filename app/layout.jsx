import { Barlow_Condensed, Bebas_Neue, Fraunces, Manrope } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
  title: "Calenders Events Bar & Lounge — Takoradi's Premier Venue",
  description:
    "Experience the best of Takoradi's nightlife and dining. Calenders Events Bar & Lounge offers a unique garden-style atmosphere for all your social events.",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

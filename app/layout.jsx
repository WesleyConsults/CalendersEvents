import { Fraunces, Manrope } from 'next/font/google';
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

export const metadata = {
  title: "Calenders Events Bar & Lounge — Takoradi's Premier Venue",
  description:
    "Experience the best of Takoradi's nightlife and dining. From Reggae Thursdays to our signature brick oven pizza, Calenders Events Bar & Lounge offers a unique garden/beach-style atmosphere for all your social events.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable} min-h-screen selection:bg-brand-green/20 selection:text-brand-green-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

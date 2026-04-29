'use client';

import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Menu', href: '/menu' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome ? 'bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Calenders Events Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span
            className={`text-xl font-display font-bold tracking-tight ${
              isScrolled || !isHome ? 'text-brand-green' : 'text-white'
            }`}
          >
            CALENDERS
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled || !isHome ? 'text-slate-600 hover:text-brand-green' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/booking"
            className="bg-brand-green text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-brand-green-dark transition-colors shadow-lg shadow-brand-green/20"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className={isScrolled || !isHome ? 'text-brand-green' : 'text-white'} />
          ) : (
            <MenuIcon className={isScrolled || !isHome ? 'text-brand-green' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-b border-brand-green/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-display text-brand-brown hover:text-brand-green transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/booking"
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-green text-white px-6 py-3 rounded-xl font-semibold text-center"
              >
                Book an Event
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

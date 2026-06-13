'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { HOME_GALLERY_IMAGES } from '@/lib/homeGalleryImages';

const SLIDE_INTERVAL_MS = 7000;

export default function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % HOME_GALLERY_IMAGES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-[88svh] md:min-h-screen flex items-start md:items-center overflow-hidden">
      {/* ... (background code) */}
      <div className="absolute inset-0 z-0">
        {HOME_GALLERY_IMAGES.map(({ src, alt }, index) => (
          <motion.img
            key={src}
            src={src}
            alt={alt}
            initial={false}
            animate={{ opacity: index === activeImageIndex ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ opacity: index === 0 ? 1 : 0 }}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority={index === 0 ? 'high' : 'auto'}
            referrerPolicy="no-referrer"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-brand-green/30" />
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10 text-white pt-28 pb-16 md:pt-32 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Headline */}
          <h1 className="hero-title mb-6">
            Calenders Events{' '}
            <em className="not-italic text-brand-cream/80 underline decoration-brand-green decoration-[3px] underline-offset-8">
              Bar &amp; Lounge
            </em>
          </h1>

          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed font-light">
            Welcome to Calenders Events Bar &amp; Lounge. We bring garden-style dining,
            drinks, private events, and vibrant entertainment together in Takoradi.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact#book-event"
              className="button-text bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3.5 md:px-7 md:py-4 rounded-xl text-sm md:text-base transition-all hover:scale-105 shadow-2xl shadow-brand-green/40 flex items-center gap-2"
            >
              Book an Event <ChevronRight size={18} />
            </Link>
          </div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10 text-white/60 text-sm"
          >
            {[
              { value: '150+', label: 'Events Hosted' },
              { value: '5.0 ★', label: 'Google Rating' },
              { value: '5 yrs', label: 'In Business' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-white font-bold text-lg">{value}</span>
                <span className="text-xs">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

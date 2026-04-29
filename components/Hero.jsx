'use client';

import { motion } from 'motion/react';
import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image + layered overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2000"
          alt="Calenders Events venue"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-brand-green/30" />
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10 text-white pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase mb-8"
          >
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            Takoradi&apos;s Premier Events &amp; Dining Venue
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight text-balance">
            Calenders Events{' '}
            <em className="not-italic text-brand-cream/80 underline decoration-brand-green decoration-[3px] underline-offset-8">
              Bar &amp; Lounge
            </em>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed font-light">
            Located in the heart of Takoradi&apos;s Harbour Area. Experience the perfect blend of garden-style dining, 
            brick oven pizza, and vibrant entertainment.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#booking"
              className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:scale-105 shadow-2xl shadow-brand-green/40 flex items-center gap-2"
            >
              Book an Event <ChevronRight size={18} />
            </a>
            <a
              href="#restaurant"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all"
            >
              View Menu
            </a>
          </div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-white/10 text-white/60 text-sm"
          >
            {[
              { value: '1,200+', label: 'Events Hosted' },
              { value: '5.0 ★', label: 'Google Rating' },
              { value: '7 yrs', label: 'In Business' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-white font-bold text-lg">{value}</span>
                <span className="text-xs tracking-wide">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-brand-green rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

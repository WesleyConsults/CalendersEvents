'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Leaf, Wine, Music, User } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const FEATURES = [
  { icon: Leaf, label: 'Lush Gardens', desc: 'Open-air setting for relaxed dining, social gatherings, and outdoor celebrations.' },
  { icon: Wine, label: 'Lounge Bar', desc: 'Cocktails, good music, football viewing, and a relaxed nightlife atmosphere.' },
  { icon: Music, label: 'Live Entertainment', desc: 'Weekly music, karaoke, live band sessions, and special event nights.' },
];

const ABOUT_IMAGES = [
  {
    src: '/images/seatingdaytime.jpeg',
    alt: 'CalendersGH restaurant and garden seating in Takoradi',
    className: 'translate-y-8',
  },
  {
    src: '/images/entrance.jpeg',
    alt: 'CalendersGH venue entrance on Revert Lane in Takoradi',
    className: '',
  },
  {
    src: '/images/events/calenders-wedding-event.webp',
    alt: 'Calenders Events Bar and Lounge event venue for weddings',
    className: 'translate-y-8',
  },
  {
    src: '/images/events/calenders-movie-in-the-park-02.webp',
    alt: 'Calenders Events movie in the park guests in Takoradi',
    className: '',
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_IMAGES.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className={`aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ${image.className}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl" />
          </div>

          {/* Text content */}
          <div>
            <SectionHeading
              title={
                <span className="block">
                  Welcome to
                  <br />
                    <Image
                      src="/calenders-wordmark.png"
                      alt="CalendersGH — Calenders Events Bar & Lounge"
                    width={200}
                    height={44}
                    className="inline-block h-11 md:h-[4.4rem] lg:h-[5rem] w-auto mt-1"
                  />
                </span>
              }
            />
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Calenders Events Bar &amp; Lounge is one of Takoradi&apos;s warmest destinations for dining, drinks, entertainment, and private celebrations. Established in 2019, Calenders was created to help individuals, families, groups, and businesses plan memorable social events within the Sekondi-Takoradi metropolis.
            </p>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Guests often find us as CalendersGH, Calenders GH, Calenders Takoradi, or even
              CalendarsGH, but the experience is the same: welcoming food, drinks, music, and events
              at Revert Lane.
            </p>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              From open-air garden gatherings, Calenders offers flexible spaces for weddings, birthdays, corporate events, receptions, live shows, and private parties.
            </p>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              What makes Calenders different is the way everything comes together in one place. Guests can enjoy our lush garden setting, relax at the lounge bar, watch live football, enjoy cocktails and good music, or share great food with friends and family.
            </p>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              For weddings and special occasions, our in-house bridal suite adds extra convenience and comfort, making it easier for clients to prepare, host, and celebrate without moving between multiple locations.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              At Calenders, we believe every visit should feel relaxed, lively, and memorable — whether you are coming for lunch, a night out, a live band session, or one of life&apos;s biggest celebrations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-green/5 shadow-sm"
                >
                  <div className="shrink-0 pt-0.5 text-brand-green">
                    <item.icon size={26} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown text-sm">{item.label}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Message from the CEO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-20 md:mt-28 overflow-hidden rounded-[2rem] border border-[#E7D6C4] bg-white shadow-lg"
        >
          <div className="grid md:grid-cols-[1fr_2fr]">
            <div className="relative flex items-center justify-center bg-brand-green/5 px-8 py-10 md:py-12">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-brand-green/10 text-brand-green md:h-40 md:w-40">
                <User size={80} strokeWidth={1.2} />
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
                <span className="inline-block rounded-full bg-brand-green/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.08em] text-brand-green">
                  CEO & Founder
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:p-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-brand-green md:hidden mb-4">
                CEO & Founder
              </span>
              <p className="eyebrow mb-2">Message from the CEO</p>
              <blockquote className="mt-4 text-lg text-slate-700 leading-relaxed md:text-xl lg:text-2xl">
                &ldquo;Calenders was built on a simple belief — that every special moment deserves a
                beautiful setting. From the very beginning, our mission has been to create a space
                where the people of Takoradi and beyond can come together to celebrate, dine, and
                make lasting memories. Every event we host, every meal we serve, and every guest
                that walks through our doors is a part of that story. We are not just a venue —
                we are a community, and we are honoured to be part of your celebrations.&rdquo;
              </blockquote>
              <div className="mt-6 border-l-4 border-brand-green pl-4">
                <p className="font-bold text-brand-brown text-lg">Mr. Akwesi Bawuah</p>
                <p className="text-sm text-slate-500">Chief Executive Officer, Calenders Events</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

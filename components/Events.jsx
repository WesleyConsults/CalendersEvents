'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Camera,
  Film,
  Gift,
  Heart,
  MapPin,
  Mic2,
  Music,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import WeeklyLineup from '@/components/WeeklyLineup';
import {
  EVENT_GALLERY_IMAGES,
  PRIVATE_EVENT_TYPES,
  UPCOMING_EVENTS,
} from '@/lib/data';

const EVENT_CONFIG = {
  Karaoke: {
    icon: Mic2,
    iconColor: 'text-brand-green',
    badge: 'bg-amber-100 text-amber-700',
  },
  'Live Band': {
    icon: Music,
    iconColor: 'text-brand-green',
    badge: 'bg-yellow-100 text-yellow-700',
  },
  Movie: {
    icon: Film,
    iconColor: 'text-brand-green',
    badge: 'bg-cyan-100 text-cyan-700',
  },
};

const PRIVATE_EVENT_ICONS = [Heart, Gift, Briefcase, Camera];

export default function Events({ detailed = false }) {
  return (
    <section id="events" className="bg-white">
      <div className={`container mx-auto px-6 ${detailed ? 'py-12 md:py-24' : 'pt-12 md:pt-24'}`}>
        {detailed ? (
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <SectionHeading
                title={
                  <span className="block">
                    Events at
                    <br />
                    <Image
                      src="/calenders-wordmark.png"
                      alt="Calenders"
                      width={200}
                      height={44}
                      className="inline-block h-11 md:h-[4.4rem] lg:h-[5rem] w-auto mt-1"
                    />
                  </span>
                }
                subtitle="Live Nights & Private Celebrations"
              />
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                From weekly entertainment nights to fully hosted private celebrations, Calenders brings
                food, drinks, music, and garden-style atmosphere together in one venue.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative min-h-[360px] overflow-hidden rounded-[2rem]"
            >
              <img
                src="/images/lounge.jpeg"
                alt="Calenders lounge and event atmosphere"
                className="absolute inset-0 h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <MapPin size={16} className="text-brand-green" />
                  Takoradi Harbour Area
                </div>
                <h3 className="card-title mt-3 text-3xl">Weekly shows, private parties, and nights that feel alive.</h3>
              </div>
            </motion.div>
          </div>
        ) : (
          <SectionHeading title="Join the Celebration" subtitle="Upcoming Events" centered />
        )}
      </div>

      {detailed && <WeeklyLineup />}

      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {UPCOMING_EVENTS.map((event, index) => {
            const config = EVENT_CONFIG[event.type] ?? EVENT_CONFIG.Karaoke;
            const Icon = config.icon;

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group relative overflow-hidden rounded-3xl border border-brand-cream/10 bg-brand-brown-light text-brand-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-brown-light/20 flex flex-col"
              >
                {/* Event image */}
                <div className="h-60 w-full overflow-hidden md:h-64">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* Icon + badge row */}
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`shrink-0 ${config.iconColor}`}>
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.08em] ${config.badge}`}>
                      {event.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="card-title text-xl text-white mb-2">
                    {event.title}
                  </h3>

                  {/* Date */}
                  <div className="mb-3 flex items-center gap-1.5 text-sm font-medium text-brand-cream/70">
                    <Calendar size={14} className="shrink-0 text-brand-green" />
                    {event.date}
                  </div>

                  {/* Description */}
                  <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-brand-cream/70">
                    {event.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href="/contact#book-event"
                    className="button-text mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-brand-cream/15 bg-brand-cream py-2.5 text-sm text-brand-brown transition-all hover:bg-white"
                  >
                    Reserve a Spot <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {!detailed && (
          <p className="mt-10 text-center text-slate-500 text-sm max-w-2xl mx-auto">
            From Valentine&apos;s weekends to Ghana Independence celebrations and private birthday parties,
            we host the most memorable themed events in Takoradi.{' '}
            <Link
              href="/events"
                  className="font-bold text-brand-green underline underline-offset-4 hover:text-brand-green-dark transition-colors"
            >
              Explore all events →
            </Link>
          </p>
        )}
      </div>

      {detailed && (
        <>
          <div className="bg-brand-brown-light py-12 md:py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="mb-12 max-w-3xl">
                <p className="eyebrow mb-2">
                  Private Events
                </p>
                <h2 className="section-title text-white">Book the Space for Your Own Celebration</h2>
                <p className="mt-5 text-brand-cream/70 leading-relaxed">
                  Calenders works for intimate family moments, polished corporate gatherings,
                  and entertainment-led nights where food, music, and drinks all matter.
                </p>
                <Link
                  href="/contact#book-event"
                  className="button-text mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-white transition-colors hover:bg-brand-green-dark"
                >
                  Plan an Event <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {PRIVATE_EVENT_TYPES.map((event, index) => {
                  const Icon = PRIVATE_EVENT_ICONS[index] ?? Sparkles;

                  return (
                    <motion.article
                      key={event.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
                    >
                      <div className="text-brand-green">
                        <Icon size={30} strokeWidth={1.8} />
                      </div>
                      <h3 className="card-title mt-6 text-xl">{event.title}</h3>
                      <p className="mt-3 text-sm text-brand-cream/70 leading-relaxed">{event.description}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="eyebrow mb-2">
                    Event Moments
                  </p>
                  <h2 className="section-title text-brand-brown">The Atmosphere Guests Remember</h2>
                </div>
                <Link
                  href="/#gallery"
                  className="button-text hidden rounded-xl border border-brand-green/20 px-5 py-3 text-sm text-brand-brown transition-colors hover:border-brand-green hover:text-brand-green md:inline-flex"
                >
                  View Gallery
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {EVENT_GALLERY_IMAGES.map((item, index) => (
                  <motion.figure
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <figcaption className="card-title absolute bottom-0 left-0 right-0 p-5 text-lg text-white">
                      {item.title}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-brand-brown-light py-12 md:py-20 text-white">
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <p className="eyebrow mb-2">
                    Ready to Host?
                  </p>
                  <h2 className="section-title-sm">Tell us the date, guest count, and vibe.</h2>
                  <p className="mt-4 max-w-2xl text-brand-cream/70 leading-relaxed">
                    We can help shape the food, drinks, seating, entertainment, and event flow around your occasion.
                  </p>
                </div>
                <Link
                  href="/contact#book-event"
                  className="button-text inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-7 py-4 text-white transition-colors hover:bg-brand-green-dark"
                >
                  Start Booking <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

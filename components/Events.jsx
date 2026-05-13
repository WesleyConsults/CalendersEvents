'use client';

import { motion } from 'motion/react';
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Camera,
  CheckCircle2,
  Clock,
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
  EVENT_SERVICES,
  PRIVATE_EVENT_TYPES,
  UPCOMING_EVENTS,
  WEEKLY_LINEUP,
} from '@/lib/data';

const EVENT_CONFIG = {
  Karaoke: {
    icon: Mic2,
    color: 'bg-amber-500',
    bg: 'from-amber-50 to-orange-50',
    badge: 'bg-amber-100 text-amber-700',
  },
  'Live Band': {
    icon: Music,
    color: 'bg-brand-green',
    bg: 'from-yellow-50 to-amber-50',
    badge: 'bg-yellow-100 text-yellow-700',
  },
  Movie: {
    icon: Film,
    color: 'bg-cyan-600',
    bg: 'from-cyan-50 to-sky-50',
    badge: 'bg-cyan-100 text-cyan-700',
  },
};

const PRIVATE_EVENT_ICONS = [Heart, Gift, Briefcase, Camera];

export default function Events({ detailed = false }) {
  return (
    <section id="events" className="bg-white">
      <div className="container mx-auto px-6 py-24">
        {detailed ? (
          <div className="mb-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <SectionHeading title="Events at Calenders" subtitle="Live Nights & Private Celebrations" />
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                From weekly entertainment nights to fully hosted private celebrations, Calenders brings
                food, drinks, music, and garden-style atmosphere together in one venue.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-green-dark"
                >
                  Plan an Event <ArrowRight size={16} />
                </Link>
                <a
                  href="#weekly-lineup"
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-green/20 px-6 py-3 font-semibold text-brand-brown transition-colors hover:border-brand-green hover:text-brand-green"
                >
                  See Weekly Lineup
                </a>
              </div>
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
                <h3 className="mt-3 text-3xl font-bold">Weekly shows, private parties, and nights that feel alive.</h3>
              </div>
            </motion.div>
          </div>
        ) : (
          <SectionHeading title="Join the Celebration" subtitle="Upcoming Events" centered />
        )}

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
                className={`group relative bg-gradient-to-br ${config.bg} rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                {/* Event image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  {/* Icon + badge row */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${config.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon size={22} />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${config.badge}`}>
                      {event.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-brown mb-2 leading-snug">
                    {event.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4 font-medium">
                    <Calendar size={14} className="shrink-0 text-brand-green" />
                    {event.date}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 line-clamp-3">
                    {event.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href="/booking"
                    className="mt-6 w-full bg-white hover:bg-brand-brown hover:text-white border border-slate-200 text-brand-brown py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 group-hover:border-brand-brown"
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
              className="text-brand-green font-semibold underline underline-offset-4 hover:text-brand-green-dark transition-colors"
            >
              Explore all events →
            </Link>
          </p>
        )}
      </div>

      {detailed && (
        <>
          <WeeklyLineup />

          <div className="bg-brand-brown-light py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="mb-12 max-w-3xl">
                <p className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-2">
                  Private Events
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">Book the Space for Your Own Celebration</h2>
                <p className="mt-5 text-brand-cream/70 leading-relaxed">
                  Calenders works for intimate family moments, polished corporate gatherings,
                  and entertainment-led nights where food, music, and drinks all matter.
                </p>
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green text-white">
                        <Icon size={22} />
                      </div>
                      <h3 className="mt-6 text-xl font-bold">{event.title}</h3>
                      <p className="mt-3 text-sm text-brand-cream/70 leading-relaxed">{event.description}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-brand-cream py-24">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
                <div>
                  <p className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-2">
                    What We Provide
                  </p>
                  <h2 className="text-4xl md:text-5xl text-brand-brown font-bold">Everything Guests Need in One Place</h2>
                  <p className="mt-5 text-slate-600 leading-relaxed">
                    The biggest advantage is convenience: the restaurant, bar, entertainment,
                    and venue setup can work together under one plan.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {EVENT_SERVICES.map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm border border-slate-100"
                    >
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-green" />
                      <p className="text-sm font-medium leading-relaxed text-slate-700">{service}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-2">
                    Event Moments
                  </p>
                  <h2 className="text-4xl md:text-5xl text-brand-brown font-bold">The Atmosphere Guests Remember</h2>
                </div>
                <Link
                  href="/#gallery"
                  className="hidden rounded-xl border border-brand-green/20 px-5 py-3 text-sm font-semibold text-brand-brown transition-colors hover:border-brand-green hover:text-brand-green md:inline-flex"
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
                    <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-lg font-bold text-white">
                      {item.title}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-brand-brown-light py-20 text-white">
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <p className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-2">
                    Ready to Host?
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold">Tell us the date, guest count, and vibe.</h2>
                  <p className="mt-4 max-w-2xl text-brand-cream/70 leading-relaxed">
                    We can help shape the food, drinks, seating, entertainment, and event flow around your occasion.
                  </p>
                </div>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-7 py-4 font-semibold text-white transition-colors hover:bg-brand-green-dark"
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

'use client';

import { motion } from 'motion/react';
import { ChevronRight, Flame, Martini, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import {
  MENU_HIGHLIGHTS,
  RESTAURANT_FEATURES,
  RESTAURANT_GALLERY,
  RESTAURANT_MENU_SECTIONS,
} from '@/lib/data';

export default function MenuPreview({ detailed = false }) {
  return (
    <section id="restaurant" className="py-12 md:py-24 bg-brand-cream">
      <div className="container mx-auto px-6 space-y-10 md:space-y-16">
        <div className="text-center">
          <SectionHeading title="Restaurant & Bar Experience" subtitle="The Restaurant" centered />
          <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
            Calenders is more than an event venue. Our restaurant and lounge give guests a warm place to eat,
            unwind, and enjoy great food, cocktails, and late-night energy before or after every celebration.
          </p>
        </div>

        {!detailed && (
          <>
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
              <div className="grid sm:grid-cols-2 gap-5">
                {RESTAURANT_GALLERY.map((space, index) => (
                  <motion.div
                    key={space.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className={`relative overflow-hidden rounded-[2rem] ${
                      index === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'
                    }`}
                  >
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <h3 className="card-title text-2xl">{space.title}</h3>
                      <p className="mt-2 text-sm text-white/80 max-w-md">{space.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-green">
                    Dining at Calenders
                  </span>
                  <h3 className="card-title mt-6 text-3xl md:text-4xl text-brand-brown">
                    A restaurant guests can enjoy all day and a bar that comes alive at night.
                  </h3>
                  <div className="mt-8 space-y-4">
                    {RESTAURANT_FEATURES.map((feature) => (
                      <div key={feature} className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-green shrink-0" />
                        <p className="text-slate-600 leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/restaurant"
                    className="button-text inline-flex items-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-white transition-colors hover:bg-brand-green-dark"
                  >
                    Explore Restaurant <ChevronRight size={16} />
                  </Link>
                  <a
                    href="#restaurant-menu"
                    className="button-text inline-flex items-center gap-2 rounded-xl border border-brand-green/20 px-5 py-3 text-brand-brown transition-colors hover:border-brand-green hover:text-brand-green"
                  >
                    See Menu & Bar
                  </a>
                </div>
              </motion.div>
            </div>

            <div>
              <div className="mb-8 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="card-title text-2xl md:text-3xl text-brand-brown">Guest Favourites</h3>
                  <p className="mt-2 text-slate-500">
                    A quick look at the dishes and drinks guests ask for the most.
                  </p>
                </div>
                <Link
                  href="/restaurant"
                  className="text-sm font-bold text-brand-green hover:text-brand-green-dark"
                >
                  View full restaurant page
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {MENU_HIGHLIGHTS.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 group transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      {/* Price pill */}
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-brand-green font-bold text-sm px-3 py-1 rounded-full shadow-sm">
                        {item.price}
                      </div>
                      {/* Popular badge on first item */}
                      {index === 0 && (
                        <div className="absolute top-3 left-3 bg-brand-brown text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Flame size={11} /> Popular
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-5 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-brand-brown text-lg leading-tight">{item.name}</h4>
                        <p className="text-slate-400 text-xs mt-0.5">Ghanaian cuisine</p>
                      </div>
                      <button className="w-9 h-9 rounded-full bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white flex items-center justify-center transition-colors shrink-0">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div id="restaurant-menu" className="grid lg:grid-cols-2 gap-8">
              {RESTAURANT_MENU_SECTIONS.map((section, index) => {
                const Icon = index === 0 ? UtensilsCrossed : Martini;

                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-[2rem] bg-white border border-slate-100 shadow-sm p-8"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="eyebrow">
                          {section.subtitle}
                        </p>
                        <h3 className="card-title mt-2 text-2xl text-brand-brown">{section.title}</h3>
                        <p className="mt-2 text-slate-600 leading-relaxed">{section.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {section.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-start justify-between gap-4 rounded-2xl bg-brand-cream px-4 py-4"
                        >
                          <div>
                            <h4 className="font-bold text-brand-brown">{item.name}</h4>
                            <p className="mt-1 text-sm text-slate-500">{item.note}</p>
                          </div>
                          <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-green shadow-sm">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}

        {detailed && (
          <div className="rounded-[2rem] bg-brand-brown-light px-6 py-8 md:px-8 md:py-10 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="eyebrow">
                  Reservations & Events
                </p>
                <h3 className="card-title mt-3 text-3xl">Planning an event with food and drinks?</h3>
                <p className="mt-3 max-w-2xl text-white/75 leading-relaxed">
                  Let us help you pair the right meals, drinks, and lounge setup with your celebration.
                </p>
              </div>
              <Link
                href="/contact#book-event"
                className="button-text inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-white transition-colors hover:bg-brand-green-dark"
              >
                Book the Venue <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

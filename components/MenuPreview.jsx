'use client';

import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Download, ExternalLink, Flame, Martini, MessageCircle, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import worldCupPromoFlyer from '@/picture asset/worldcup flyer 1.jpg';
import {
  MENU_FILTERS,
  MENU_HIGHLIGHTS,
  RESTAURANT_FULL_MENU,
  RESTAURANT_FEATURES,
  RESTAURANT_GALLERY,
  RESTAURANT_MENU_SECTIONS,
} from '@/lib/data';

const menuPosterImage = '/images/menu/calenders-menu-poster.png';
const worldCupPromoAlt =
  'Calenders World Cup Promo - 5% off meals on matchdays and chicken wings plus beer combo';
const whatsAppLink = 'https://wa.me/233557590224';

export default function MenuPreview({ detailed = false }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleMenuCategories = useMemo(() => {
    if (activeCategory === 'All') {
      return RESTAURANT_FULL_MENU;
    }

    return RESTAURANT_FULL_MENU.filter((category) => category.title === activeCategory);
  }, [activeCategory]);

  return (
    <section id="restaurant" className="py-12 md:py-24 bg-brand-cream">
      <div className="container mx-auto px-6 space-y-10 md:space-y-16">
        {!detailed && (
          <div className="text-center">
            <SectionHeading title="Restaurant & Bar Experience" subtitle="The Restaurant" centered />
            <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
              Calenders is more than an event venue. Our restaurant and lounge give guests a warm place to eat,
              unwind, and enjoy great food, cocktails, and late-night energy before or after every celebration.
            </p>
          </div>
        )}

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
                className="flex flex-col justify-between rounded-[2rem] border border-[#E7D6C4] bg-[#FFF4E6] p-8 shadow-sm md:p-10"
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
                    className="group overflow-hidden rounded-3xl border border-[#E7D6C4] bg-[#FFF4E6] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Image */}
                    <div className="relative aspect-[5/4] overflow-hidden">
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
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <h4 className="text-lg font-bold leading-tight text-brand-brown">{item.name}</h4>
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
                    className="rounded-[2rem] border border-[#E7D6C4] bg-[#FFF4E6] p-8 shadow-sm"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="shrink-0 pt-1 text-brand-green">
                        <Icon size={30} strokeWidth={1.8} />
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
          <div className="space-y-10 md:space-y-14">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E7D6C4] bg-[#FFF8EC] px-6 py-10 shadow-sm md:px-10 md:py-14">
              <div className="absolute inset-x-0 top-0 h-1.5 brand-button-gradient" />
              <div className="absolute inset-y-0 right-0 w-2 bg-[#7A1D73]/10" />
              <div className="absolute inset-y-0 left-0 w-2 bg-[#E66C19]/10" />
              <div className="relative mx-auto max-w-4xl text-center">
                <p className="eyebrow">Restaurant</p>
                <h1 className="section-title mt-4 text-[#6F173F]">Calenders Menu</h1>
                <p className="mx-auto mt-5 max-w-3xl text-base text-slate-700 md:text-lg">
                  Explore our food menu — from starters and rice dishes to charcoal grill specials,
                  sandwiches, kebabs, and group-friendly meals.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mx-auto w-full max-w-[760px] rounded-[1.5rem] border border-[#E7D6C4] bg-[#FFFDF8] p-3 shadow-lg shadow-[#7A1D73]/10 md:rounded-[2rem] md:p-4"
            >
              <img
                src={worldCupPromoFlyer.src}
                alt={worldCupPromoAlt}
                width={worldCupPromoFlyer.width}
                height={worldCupPromoFlyer.height}
                className="mx-auto h-auto w-full rounded-[1rem] object-contain md:rounded-[1.5rem]"
              />
            </motion.div>

            <div id="restaurant-menu" className="space-y-8">
              <div className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible">
                {MENU_FILTERS.map((filter) => {
                  const isActive = filter === activeCategory;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveCategory(filter)}
                      className={`button-text shrink-0 rounded-full border px-4 py-2.5 font-menu-text text-base tracking-[0.02em] transition-all md:px-5 ${
                        isActive
                          ? 'border-[#6F173F] bg-[#6F173F] text-white shadow-md shadow-[#6F173F]/20'
                          : 'border-[#E7D6C4] bg-white/80 text-brand-brown hover:border-brand-green hover:text-brand-green'
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>

              <div className="grid gap-5 lg:grid-cols-2 lg:gap-7">
                {visibleMenuCategories.map((category, index) => (
                  <motion.article
                    key={category.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="group rounded-[1.5rem] border border-[#E7D6C4] bg-[#FFFDF8] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7A1D73]/10 md:p-6"
                  >
                    <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#E7D6C4] pb-4">
                      <h2 className="font-menu-display text-3xl uppercase tracking-[0.06em] text-[#6F173F] md:text-4xl">
                        {category.title}
                      </h2>
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-green shadow-[0_0_0_6px_rgba(232,98,26,0.12)]" />
                    </div>

                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex flex-col gap-1 rounded-2xl bg-[#FFF8EC] px-4 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-5"
                        >
                          <h3 className="min-w-0 break-words font-menu-text text-xl font-medium leading-snug tracking-[0.01em] text-slate-800 md:text-[1.35rem]">
                            {item.name}
                          </h3>
                          <span className="shrink-0 whitespace-nowrap font-menu-text text-lg font-bold leading-snug tracking-[0.01em] text-brand-green sm:text-right md:text-xl">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>

              <p className="text-center text-sm font-medium text-slate-500">Prices may be subject to change.</p>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid overflow-hidden rounded-[2rem] border border-[#E7D6C4] bg-[#FFFDF8] shadow-sm lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="relative min-h-[260px] overflow-hidden lg:min-h-full">
                <img
                  src="/images/local-dish-time.png"
                  alt="Ghanaian local dishes with flag and meals"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent lg:bg-gradient-to-r" />
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-3 py-1.5 text-sm font-bold text-brand-green">
                  <UtensilsCrossed size={16} />
                  Local Dish Time
                </div>
                <h2 className="mt-5 font-menu-display text-3xl uppercase tracking-[0.06em] text-[#6F173F] md:text-4xl">
                  Local dishes before the live band
                </h2>
                <p className="mt-4 max-w-2xl text-slate-700 leading-relaxed md:text-lg">
                  Local dishes are available from <strong>11:00 AM to 4:00 PM</strong> on weekdays
                  and <strong>11:00 AM to 5:00 PM</strong> on weekends.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#FFF8EC] px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Serving Time</p>
                    <p className="mt-1 font-menu-text text-xl font-bold text-brand-brown">11:00 AM - 4 PM (Weekdays) / 5 PM (Weekends)</p>
                  </div>
                  <div className="rounded-2xl bg-[#FFF8EC] px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Best For</p>
                    <p className="mt-1 font-menu-text text-xl font-bold text-brand-brown">Lunch and pre-show meals</p>
                  </div>
                </div>
              </div>
            </motion.article>

            <div className="rounded-[1.5rem] border border-[#E7D6C4] bg-white px-5 py-6 shadow-sm md:px-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-slate-600">
                  Prefer the original poster version? View or download the full menu below.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={menuPosterImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-text inline-flex items-center justify-center gap-2 rounded-xl border border-[#6F173F]/20 px-5 py-3 text-[#6F173F] transition-colors hover:border-[#6F173F] hover:bg-[#6F173F] hover:text-white"
                  >
                    View Full Menu Poster <ExternalLink size={16} />
                  </a>
                  <a
                    href={menuPosterImage}
                    download
                    className="button-text inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-white transition-colors hover:bg-brand-green-dark"
                  >
                    Download Menu Poster <Download size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-brand-brown-light px-6 py-8 text-white md:px-8 md:py-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="eyebrow">Reservations & Events</p>
                  <h3 className="card-title mt-3 text-3xl">Planning a meal, hangout, or private event?</h3>
                  <p className="mt-3 max-w-2xl text-white/75 leading-relaxed">
                    Let us help you pair the right meals, drinks, and lounge setup with your celebration.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact#book-event"
                    className="button-text inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-white transition-colors hover:bg-brand-green-dark"
                  >
                    Book Now <ChevronRight size={16} />
                  </Link>
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-text inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-brand-brown transition-colors hover:bg-brand-cream"
                  >
                    Contact Us on WhatsApp <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

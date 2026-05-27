import Hero from '@/components/Hero';
import GalleryStrip from '@/components/GalleryStrip';
import ImagePreloader from '@/components/ImagePreloader';
import WhatWeOffer from '@/components/WhatWeOffer';
import WeeklyLineup from '@/components/WeeklyLineup';
import { GALLERY_IMAGES } from '@/lib/data';
import { HOME_GALLERY_IMAGES } from '@/lib/homeGalleryImages';

const HOME_PRELOAD_IMAGES = [
  ...HOME_GALLERY_IMAGES.map(({ src }) => src),
  '/images/offers/events-and-celebrations-card.png',
  '/images/offers/restaurant-and-bar-card.png',
  '/images/offers/live-entertainment-card.png',
  '/images/offers/garden-atmosphere-card.png',
  '/images/seatingdaytime.jpeg',
  '/images/events/calenders-wedding-event.webp',
  '/images/events/calenders-movie-in-the-park-01.webp',
  ...GALLERY_IMAGES.slice(0, 5),
];

export default function Page() {
  return (
    <main>
      <ImagePreloader images={HOME_PRELOAD_IMAGES} />
      <Hero />
      <WhatWeOffer />
      <WeeklyLineup variant="preview" />
      <GalleryStrip />
    </main>
  );
}

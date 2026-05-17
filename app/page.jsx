import Hero from '@/components/Hero';
import GalleryStrip from '@/components/GalleryStrip';
import WhatWeOffer from '@/components/WhatWeOffer';
import WeeklyLineup from '@/components/WeeklyLineup';

export default function Page() {
  return (
    <main>
      <Hero />
      <WhatWeOffer />
      <WeeklyLineup />
      <GalleryStrip />
    </main>
  );
}

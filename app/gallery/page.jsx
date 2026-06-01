import Gallery from '@/components/Gallery';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Gallery | CalendersGH in Takoradi',
  description:
    'Browse photos from CalendersGH and Calenders Events Bar & Lounge in Takoradi, including garden dining, live entertainment, private events and celebrations.',
  path: '/gallery',
  image: '/images/events/calenders-events-wedding-04.webp',
});

export default function GalleryPage() {
  return (
    <main className="pt-16 md:pt-20">
      <Gallery />
    </main>
  );
}

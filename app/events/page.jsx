import Events from '@/components/Events';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Events at CalendersGH | Live Nights & Private Events',
  description:
    'Explore Calenders Events in Takoradi, including live entertainment, karaoke, watch parties, private celebrations and special nights at Calenders Events Bar & Lounge.',
  path: '/events',
  image: '/images/events/calenders-wedding-event.webp',
});

export default function EventsPage() {
  return (
    <main className="pt-16 md:pt-20">
      <Events detailed />
    </main>
  );
}

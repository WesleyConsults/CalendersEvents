import Contact from '@/components/Contact';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Contact CalendersGH | Calenders Events Bar & Lounge',
  description:
    'Contact CalendersGH in Takoradi for restaurant reservations, event bookings, private celebrations, bar and lounge inquiries at Calenders Events Bar & Lounge.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <main className="pt-16 md:pt-20">
      <Contact />
    </main>
  );
}

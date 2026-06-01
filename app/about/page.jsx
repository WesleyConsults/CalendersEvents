import About from '@/components/About';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'About CalendersGH | Calenders Events Bar & Lounge',
  description:
    'Learn about CalendersGH, also known as Calenders GH and Calenders Events Bar & Lounge, a garden-style restaurant, bar and event venue in Takoradi.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <main className="pt-16 md:pt-20">
      <About />
    </main>
  );
}

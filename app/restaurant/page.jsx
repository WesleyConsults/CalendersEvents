import MenuPreview from '@/components/MenuPreview';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Restaurant & Menu | CalendersGH Takoradi',
  description:
    'View the CalendersGH restaurant and menu in Takoradi, with food, drinks, cocktails, local dishes, bar service and lounge specials at Calenders Events Bar & Lounge.',
  path: '/restaurant',
  image: '/images/bar.jpeg',
});

export default function RestaurantPage() {
  return (
    <main className="pt-16 md:pt-20">
      <MenuPreview detailed />
    </main>
  );
}

import { redirect } from 'next/navigation';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Restaurant & Menu | CalendersGH Takoradi',
  description:
    'Explore the CalendersGH restaurant menu, kitchen dishes, cocktails and bar experience at Calenders Events Bar & Lounge in Takoradi.',
  path: '/restaurant',
  image: '/images/bar.jpeg',
});

export default function MenuPage() {
  redirect('/restaurant');
}

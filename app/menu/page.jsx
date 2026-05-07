import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Restaurant | Calenders Events Bar & Lounge',
  description: 'Explore the Calenders restaurant, kitchen menu, cocktails, and bar experience.',
};

export default function MenuPage() {
  redirect('/restaurant');
}

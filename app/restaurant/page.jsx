import MenuPreview from '@/components/MenuPreview';

export const metadata = {
  title: 'Restaurant | Calenders Events Bar & Lounge',
  description: 'Discover the Calenders restaurant, signature menu, and bar selection in Takoradi.',
};

export default function RestaurantPage() {
  return (
    <main className="pt-16 md:pt-20">
      <MenuPreview detailed />
    </main>
  );
}

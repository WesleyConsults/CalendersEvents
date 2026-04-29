import './globals.css';

export const metadata = {
  title: "Calenders Events — Accra's Premier Venue",
  description:
    'Experience the heart of Ghanaian hospitality. From casual dates to grand celebrations, we make every moment matter.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

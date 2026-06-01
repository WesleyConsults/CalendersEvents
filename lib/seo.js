export const SITE_URL = 'https://www.calendersgh.com';
export const SITE_NAME = 'CalendersGH';
export const BUSINESS_NAME = 'Calenders Events Bar & Lounge';
export const BUSINESS_ADDRESS = 'Revert Lane, Takoradi, Ghana';
export const DEFAULT_OG_IMAGE = '/images/seatingdaytime.jpeg';

export const SOCIAL_LINKS = [
  'https://www.facebook.com/CalendersEvents?mibextid=wwXIfr&mibextid=wwXIfr',
  'https://www.instagram.com/calendersevents?igsh=ZGJxNXY4djkyZDdm',
  'https://www.tiktok.com/@calendersevents',
  'https://www.linkedin.com/in/calenders-events-785594317?utm_source=share_via&utm_content=profile&utm_medium=member_android',
];

export const ROUTES = [
  '/',
  '/about',
  '/events',
  '/gallery',
  '/restaurant',
  '/contact',
];

export const DEFAULT_DESCRIPTION =
  'CalendersGH is an events venue, restaurant, bar and lounge in Takoradi, Ghana, offering food, drinks, live entertainment, private events and celebrations.';

export function absoluteUrl(path = '/') {
  if (path === '/') return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function createPageMetadata({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
}) {
  const url = absoluteUrl(path);

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_GH',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'CalendersGH restaurant and bar in Takoradi',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export const localBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'BarOrPub', 'EventVenue'],
  name: BUSINESS_NAME,
  alternateName: ['CalendersGH', 'Calenders GH', 'CalendarsGH', 'Calenders Takoradi'],
  brand: {
    '@type': 'Brand',
    name: SITE_NAME,
  },
  url: SITE_URL,
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  description: DEFAULT_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Revert Lane',
    addressLocality: 'Takoradi',
    addressCountry: 'GH',
  },
  telephone: ['+233502584606', '+233557590224'],
  servesCuisine: ['Ghanaian', 'Grill', 'Bar food'],
  priceRange: 'GHS',
  sameAs: SOCIAL_LINKS,
};

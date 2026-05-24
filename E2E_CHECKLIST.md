# Calenders Events — End-to-End Test Checklist

**Last updated:** 2026-05-22

Run through this checklist before deploying. Test at these breakpoints:

| Breakpoint | Width |
|-----------|-------|
| Small phone | 360px |
| Standard phone | 390px |
| Large phone | 430px |
| Tablet | 768px |
| Desktop | 1280px+ |

---

## Global (Applies to All Pages)

### Navigation
- [ ] Navbar is fixed at top on all pages
- [ ] Navbar is transparent on homepage hero, solid on scroll and other pages
- [ ] Logo (Calenders wordmark) is visible and links to `/`
- [ ] All 6 nav links (Home, About, Events, Gallery, Restaurant, Contact) work
- [ ] "Book Now" CTA button links to `/contact#book-event`
- [ ] Mobile hamburger menu opens/closes with animation
- [ ] Mobile menu has all 6 links + "Book an Event" CTA
- [ ] Mobile menu links close the menu on click
- [ ] No horizontal scroll on any page at any breakpoint
- [ ] Smooth scroll behavior works for anchor links

### Footer
- [ ] Footer appears on all pages
- [ ] Logo/wordmark is visible and links to `/`
- [ ] Opening hours display correctly (Mon-Thu 11AM–1AM, Fri-Sat 11AM–2AM, Sun 11AM–11PM)
- [ ] Quick Links (Home, About Us, Upcoming Events, Restaurant, Bookings) all work
- [ ] Events links section is present (Weddings, Birthdays, Corporate, Live Gigs, Film Night)
- [ ] Social icons section shows with "Follow Us" label
- [ ] WhatsApp icon links to `https://wa.me/233557590224`
- [ ] Instagram icon links to Instagram profile
- [ ] Facebook, Instagram, and WhatsApp icons have real links (TikTok/music placeholder icon has been removed)
- [ ] Social icons have proper `aria-label` attributes
- [ ] Footer is responsive: 2-col on mobile, 3-col on desktop
- [ ] Copyright line shows "© 2026 Calenders Events. All rights reserved."

### Visual Consistency
- [ ] Brand cream background (`#FDFBF7`) consistent across pages
- [ ] Typography consistent (Fraunces for headings, Manrope for body)
- [ ] Orange brand accent (`#E8621A`) consistent on interactive elements
- [ ] Brand gradient appears on "Book Now" navbar button and menu page header
- [ ] Motion animations trigger on scroll (elements fade/slide in)
- [ ] No layout shift during page load or animation
- [ ] No console errors in browser devtools
- [ ] Images load without broken links

---

## Page: Homepage (`/`)

### Hero
- [ ] Background image loads (nighttime seating)
- [ ] "Calenders Events Bar & Lounge" headline visible
- [ ] Subtext about Takoradi Harbour Area visible
- [ ] "Book an Event" CTA button links to `/contact#book-event`
- [ ] Social proof strip shows: 150+ Events Hosted, 5.0 ★ Google Rating, 5 yrs In Business
- [ ] On mobile: hero content starts close to navbar (no large empty gap)
- [ ] CTA button is properly sized (not oversized on mobile)

### What We Offer
- [ ] Section heading "One place for food, music, and memorable events"
- [ ] 4 offer cards visible: Events & Celebrations, Restaurant & Bar, Live Entertainment, Garden Atmosphere
- [ ] Cards are 4-column on desktop, 2-column on tablet, stacked on mobile
- [ ] Card images load and hover scale animation works

### Weekly Lineup
- [ ] Section heading "Your Week at Calenders"
- [ ] 3 cards: Reggae Thursdays, Karaoke Saturdays, Sunday Live Band
- [ ] Each card shows: day badge, time, title, mood, highlight text
- [ ] Reggae Thursdays highlight reads "Live reggae rhythms, good food, and relaxed after-work vibes." (NOT "Open-air garden seating...")
- [ ] Cards are 3-column on desktop, stacked on mobile
- [ ] Cards have hover lift animation

### Gallery Strip
- [ ] 3 images visible: bar, lounge, entrance
- [ ] Black background
- [ ] Images are 3-column on desktop, stacked on mobile
- [ ] Hover scale animation on images

---

## Page: About (`/about`)

- [ ] Page title: "About Us | Calenders Events Bar & Lounge"
- [ ] Image collage (4 images) loads with staggered animation
- [ ] "Welcome to Calenders" heading present
- [ ] 5 paragraphs of venue story visible
- [ ] 3 feature cards: Lush Gardens, Lounge Bar, Live Entertainment
- [ ] Feature cards have icons and descriptions
- [ ] Content starts close to navbar on mobile (no large gap)
- [ ] No horizontal overflow on image collage

---

## Page: Events (`/events`)

- [ ] Page title: "Upcoming Events | Calenders Events Bar & Lounge"
- [ ] "Events at Calenders" section heading with subtitle
- [ ] Intro paragraph about food, drinks, music, garden atmosphere
- [ ] Hero image (lounge) with overlay text visible on desktop
- [ ] 4 event cards: Reggae Thursdays, Karaoke Saturdays, Sunday Live Band, Movie in the Park
- [ ] Each card has: image, icon, type badge, title, date, description, "Reserve a Spot" link
- [ ] "Reserve a Spot" links to `/contact#book-event`
- [ ] Private Events section ("Book the Space for Your Own Celebration")
- [ ] 4 private event type cards: Weddings, Birthdays, Corporate, Live Shows
- [ ] "Plan an Event" button in Private Events section links to `/contact#book-event`
- [ ] Event Moments gallery section with 5 images
- [ ] "View Gallery" link present
- [ ] "Ready to Host?" CTA section at bottom
- [ ] "Start Booking" button links to `/contact#book-event`

### Removed Content (should NOT be present)
- [ ] No top CTA buttons ("Plan an Event" / "See Weekly Lineup" at top)
- [ ] No duplicate Weekly Lineup section (Reggae, Karaoke, Sunday cards)
- [ ] No "Your Week at Calenders" heading

---

## Page: Gallery (`/gallery`)

- [ ] Page title: "Gallery | Calenders Events Bar & Lounge"
- [ ] Section heading "Moments We've Shared" with "Our Gallery" subtitle
- [ ] Images display in masonry/irregular grid layout (NOT equal boxes)
- [ ] Grid uses 6 columns on mobile, 4 columns on desktop
- [ ] Clicking/tapping an image opens lightbox preview
- [ ] Lightbox shows enlarged image on dark overlay
- [ ] Close button (X) visible and functional
- [ ] Clicking outside image closes lightbox
- [ ] Pressing Escape key closes lightbox
- [ ] Lightbox has `role="dialog"` and `aria-modal="true"`
- [ ] Instagram CTA link at bottom ("Follow us on Instagram for more")
- [ ] Instagram link opens in new tab
- [ ] All 24 gallery images load without broken links

---

## Page: Restaurant (`/restaurant`)

- [ ] Page title: "Restaurant | Calenders Events Bar & Lounge"
- [ ] Menu page header visible: "Calenders Menu"
- [ ] Description about food menu and categories
- [ ] Category filter buttons: All, Starters, Salads, Noodles, Rice Dishes, Charcoal Grill, Sandwiches, Kebabs
- [ ] Filter buttons are scrollable horizontally on mobile
- [ ] Clicking a filter shows only that category's items
- [ ] "All" shows all categories
- [ ] Menu items display name and price
- [ ] Menu items are 2-column on desktop, single column on mobile
- [ ] "Prices may be subject to change" disclaimer visible
- [ ] "View Full Menu Poster" button opens menu poster image in new tab
- [ ] "Download Menu Poster" button downloads the poster image
- [ ] Footer CTA section: "Reservations & Events" with "Book Now" and "Contact Us on WhatsApp"
- [ ] "Book Now" links to `/contact#book-event`
- [ ] WhatsApp button links to correct WhatsApp URL

### Removed Content (should NOT be present)
- [ ] No Garden Dining / Celebration Dining / Lounge & Bar image panels
- [ ] No "Guest Favourites" food cards
- [ ] No Kitchen Menu / Bar Section blocks (these were part of the removed middle content)

---

## Page: Booking (`/booking`)

- [ ] Page still loads without error
- [ ] Booking form renders with all fields
- [ ] Form submission opens mail client

---

## Page: Contact (`/contact`)

- [ ] Page title: "Contact Us | Calenders Events Bar & Lounge"
- [ ] Booking section appears FIRST at top of page
- [ ] Booking section has `id="book-event"` anchor (navigating to `/contact#book-event` scrolls here)
- [ ] Booking form fields: Full Name, Date, Guests, Event Type dropdown
- [ ] Form validation: all fields required
- [ ] "Confirm Booking" button submits and opens email client
- [ ] Email body contains all form fields
- [ ] Success state shows after submission ("Email request prepared!")
- [ ] "Make another booking" link resets the form
- [ ] WhatsApp column shows with stats (5.0 ★, 1.2k+ Events Hosted)
- [ ] "Book via WhatsApp" button links to correct WhatsApp URL
- [ ] Contact details section below booking: Location, Phone, Email
- [ ] Google Map iframe loads (may show "Interactive Map Loading..." fallback)
- [ ] Map has grayscale filter that removes on hover
- [ ] Social media icons visible (Instagram and Facebook icons render with real links — Twitter has null href so it doesn't render)
- [ ] Content starts close to navbar on mobile (no large gap)

---

## Page: `/menu` (Redirect)

- [ ] Visiting `/menu` redirects to `/restaurant`
- [ ] No flash of content before redirect

---

## Navigation Flow Checks

- [ ] Homepage "Book an Event" → `/contact#book-event` (booking form visible)
- [ ] Navbar "Book Now" → `/contact#book-event`
- [ ] Events page "Reserve a Spot" (on event cards) → `/contact#book-event`
- [ ] Events page "Plan an Event" (in Private Events) → `/contact#book-event`
- [ ] Events page "Start Booking" (bottom CTA) → `/contact#book-event`
- [ ] Restaurant page "Book Now" → `/contact#book-event`
- [ ] Footer "Bookings" link → `/contact#book-event`
- [ ] All internal links use Next.js `<Link>` (no full page reloads)

---

## Content Accuracy Checks

- [ ] Brand name always spelled "Calenders" (never "Calendars")
- [ ] Phone number: +233 50 258 4606 / 055 759 0224
- [ ] Email: calenderseventsgh@gmail.com
- [ ] WhatsApp: +233 55 759 0224
- [ ] Address: Revert Lane, Harbour Area (Near Vienna Beach), Takoradi, Ghana
- [ ] Opening hours correct in footer
- [ ] Reggae Thursdays description does NOT contain "Open-air garden seating"
- [ ] Year in footer copyright is 2026

---

## Performance Checks

- [ ] Homepage Lighthouse score ≥ 80 (mobile)
- [ ] Images use appropriate formats (WebP for events, JPEG for venue photos)
- [ ] No console 404 errors for assets
- [ ] No React hydration warnings
- [ ] `npm run build` completes without errors
- [ ] No unused CSS warnings in build output (beyond acceptable Tailwind baseline)

---

## Regression Guard (Things That Should Never Change)

- [ ] Brand spelling remains "Calenders"
- [ ] Brand gradient (`#EBA217 → #E66C19 → #CE2932 → #7A1D73`) unchanged
- [ ] Brand colors (`--color-brand-*` tokens) unchanged
- [ ] Footer is present on all pages
- [ ] Contact details are present and correct
- [ ] Booking functionality exists (form + WhatsApp)
- [ ] Navbar is fixed and scroll-aware

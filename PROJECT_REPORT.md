# Calenders Events Website — Project Report

**Last updated:** 2026-05-22

## Overview

The Calenders Events website is a marketing and booking site for **Calenders Events Bar & Lounge**, a venue in Takoradi, Ghana that offers dining, live entertainment, private events, and a garden-style atmosphere.

**Live URL:** https://www.calendersgh.com/

**GitHub:** `git@github.com:WesleyConsults/CalendersEvents.git` (branch: `main`)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Animation | Motion (`motion/react` v12) |
| Icons | Lucide React v0.546 |
| Language | Plain JavaScript (JSX) |
| Data | Static, hardcoded in `lib/data.js` |
| Backend | None — fully static frontend |

## Routes

| Route | Page File | Purpose | Status |
|-------|-----------|---------|--------|
| `/` | `app/page.jsx` | Homepage | Complete |
| `/about` | `app/about/page.jsx` | About / venue story | Complete |
| `/events` | `app/events/page.jsx` | Full events page | Complete |
| `/gallery` | `app/gallery/page.jsx` | Gallery with lightbox | Complete |
| `/restaurant` | `app/restaurant/page.jsx` | Restaurant + menu page | Simplified (see below) |
| `/menu` | `app/menu/page.jsx` | Redirects to `/restaurant` | Complete |
| `/booking` | `app/booking/page.jsx` | Standalone booking form | Still exists, but Navbar now links to `/contact#book-event` |
| `/contact` | `app/contact/page.jsx` | Contact + integrated booking | Complete |

## Components (14 total)

| Component | Type | Purpose |
|-----------|------|---------|
| `Hero.jsx` | Client | Homepage hero with CTA, social proof |
| `Navbar.jsx` | Client | Fixed nav with scroll-aware styling, mobile drawer |
| `Footer.jsx` | Server | Footer with links, hours, social icons |
| `About.jsx` | Client | About section with image collage, feature cards |
| `Events.jsx` | Client | Event cards (compact + detailed mode), private events, CTA |
| `WhatWeOffer.jsx` | Client | 4 offer cards on homepage |
| `WeeklyLineup.jsx` | Client | Thu/Sat/Sun lineup cards on homepage |
| `GalleryStrip.jsx` | Client | 3-image strip on homepage |
| `Gallery.jsx` | Client | Full gallery page with masonry grid + lightbox |
| `MenuPreview.jsx` | Client | Restaurant preview (compact) + full restaurant (detailed) with filterable menu |
| `BookingForm.jsx` | Client | Booking form (opens mail client on submit) + WhatsApp CTA |
| `Contact.jsx` | Client | Contact details, map, social links, embeds BookingForm |
| `SectionHeading.jsx` | Client | Reusable animated section heading |
| `ImagePreloader.jsx` | Client | Preloads images using idle callback |

## Data Layer (`lib/data.js`)

All dynamic content is centralized in one file with these exports:

- `UPCOMING_EVENTS` — 4 event cards (Reggae, Karaoke, Sunday Band, Movie)
- `WEEKLY_LINEUP` — 3 weekly programming items
- `EVENT_JOURNEY` — 4-step event flow (Arrive, Dine, Toast, Celebrate)
- `PRIVATE_EVENT_TYPES` — 4 private event categories
- `EVENT_SERVICES` — 6 service offerings (used on events page, "What We Provide" section was removed via revision)
- `EVENT_GALLERY_IMAGES` — 5 event gallery images
- `MENU_HIGHLIGHTS` — 11 popular menu items
- `RESTAURANT_GALLERY` — 3 restaurant intro panels
- `RESTAURANT_FEATURES` — 3 restaurant feature bullets
- `RESTAURANT_MENU_SECTIONS` — Kitchen Menu + Bar Section with items
- `MENU_FILTERS` — 8 category filter buttons
- `RESTAURANT_FULL_MENU` — 7 categories with items and prices
- `GALLERY_IMAGES` — 24 homepage/general gallery images

## Image Assets

Images are served from `public/images/`:
- `public/images/` — venue photos (7 JPEGs: bar, entrance, lounge, seating)
- `public/images/events/` — event photos (21 WebP files)
- `public/images/menu/` — menu poster (1 PNG)
- `public/images/offers/` — offer cards (4 PNGs: events, restaurant, entertainment, garden)
- `public/logo.png` — favicon/icon
- `public/calenders-wordmark.png` — brand wordmark used in Navbar and Footer

Additionally, `picture asset/` at project root contains unorganized image assets (7 items) not yet placed into `public/`.

## Revision Implementation Status

Based on `calenders_website_revision_prompt.md`:

| # | Revision | Status |
|---|----------|--------|
| 1 | Reduce mobile top spacing | Done — pages use `pt-16 md:pt-20` |
| 2 | Adjust hero button styling | Done — translucent Explore Restaurant removed; only "Book an Event" remains |
| 3 | Update Reggae Thursdays text | Done — text changed to "Live reggae rhythms, good food, and relaxed after-work vibes." |
| 4 | Add social icons to footer | Done — WhatsApp, Facebook (with real link), Instagram with "Follow Us" label (TikTok placeholder removed) |
| 5 | Clean Events page, move "Plan an Event" | Done — top buttons and duplicate Weekly Lineup removed; "Plan an Event" moved to Private Events section |
| 6 | Gallery masonry + lightbox | Done — 6-column mobile / 4-column desktop grid with varied spans; click-to-preview lightbox with Escape key close |
| 7 | Simplify Restaurant page | Done — middle content removed; only intro + Reservations CTA remain; detailed mode renders full filtered menu |
| 8 | Integrate booking into Contact | Done — BookingForm embedded at top of Contact page with `id="book-event"`; Navbar links to `/contact#book-event` |

## Recent Commits (last 10)

```
d9f7dab Use email app for booking requests
4473c79 Update event images and social links
67b6b0d Add revision prompt
41383e8 Optimize event images for performance
dd47e0c Update event imagery and gallery styling
954a4e4 Update restaurant menu and offer cards
71db206 Use Calenders wordmark in header and footer
9179366 Add homepage what we offer section
210dbf4 Apply brand gradient styling and remove Explore Restaurant button
8d1da1d Refine mobile gallery layout
```

## Brand / Design Tokens

Defined in `app/globals.css`:

```css
--font-sans: "Manrope" (body)
--font-display: "Fraunces" (headings)
--font-menu-display: "Bebas Neue" (menu page headings)
--font-menu-text: "Barlow Condensed" (menu page body)
--color-brand-cream: #FDFBF7
--color-brand-brown: #795548
--color-brand-brown-light: #4A3728
--color-brand-green: #E8621A (actually orange — naming is legacy)
--color-brand-green-dark: #D05515
```

The brand button gradient: `#EBA217 → #E66C19 → #CE2932 → #7A1D73` (orange/red/purple).

## Known Issues & Technical Debt

1. **Booking form does not send to a backend.** It opens the user's mail client via `mailto:` with pre-filled fields. No server-side handling exists.
2. **Most images are stock/placeholder.** Real Calenders venue photography is needed.
3. **Color token `brand-green` is actually orange.** Renaming would touch many files.
4. **No automated test suite.** No unit, integration, or E2E tests exist.
5. **No linting enforcement.** The `lint` script exists in `package.json` but isn't used in CI.
6. **`/booking` route still exists** but is orphaned — Navbar now links to `/contact#book-event`. Could be removed or redirected.
7. **Footer "Events" links** (Weddings, Birthdays, Corporate, Live Gigs, Film Night) are `href="#"` placeholders.
8. **Social links in Contact.jsx** — Twitter has `href: null`, so it doesn't render. Facebook now renders with the real link.
9. **Newsletter input in footer** was removed in a prior cleanup. No email capture exists.
10. **`EVENT_SERVICES`** data export still exists in `lib/data.js` but the "What We Provide" section was removed from the events page.
11. **`EVENT_JOURNEY`** and **`RESTAURANT_FEATURES`** exports exist in data but are no longer used after the revisions (Event Flow section removed, restaurant features section removed).
12. **README.md is outdated** — references Vite/TypeScript from a prior setup. The `DEVELOPER_GUIDE.md` is authoritative.

## Build & Deploy

- **Dev:** `npm run dev` (port 3000)
- **Build:** `npm run build`
- **Start:** `npm run start`
- **Deploy:** Compatible with Vercel and any Next.js-supporting platform. No environment variables required.
- **Critical:** Never run `npm run build` while `npm run dev` is running — it corrupts `.next/` and causes CSS 404s.

## Current Branch State

- Branch: `main`
- Clean working tree (only untracked `picture asset/` directory files are uncommitted)

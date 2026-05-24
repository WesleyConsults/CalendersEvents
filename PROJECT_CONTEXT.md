# Calenders Events — Project Context

**Last updated:** 2026-05-22

## What is Calenders?

Calenders Events Bar & Lounge is a hospitality venue in Takoradi, Ghana. It combines a restaurant, bar, garden lounge, and event space under one roof. The venue hosts weekly live entertainment (reggae, karaoke, live bands), private celebrations (weddings, birthdays, corporate events), and outdoor experiences like "Movie in the Park."

**Established:** 2019

**Location:** Revert Lane, Harbour Area (near Vienna Beach), Takoradi, Ghana

## Business Model

Calenders generates revenue through:
- **Walk-in dining and bar service** (restaurant + lounge)
- **Private event hosting** (weddings, birthdays, corporate events)
- **Weekly entertainment nights** (Reggae Thursdays, Karaoke Saturdays, Sunday Live Band)
- **Special events** (Movie in the Park, themed celebrations)

## Target Audience

- Young professionals and social groups in Sekondi-Takoradi
- Families celebrating milestones (weddings, birthdays, anniversaries)
- Corporate teams for team dinners and end-of-year parties
- Tourists and visitors looking for nightlife in Takoradi
- Event planners seeking a flexible garden venue

## Brand Identity

- **Name:** Calenders Events (spelled "Calenders" — not "Calendars")
- **Vibe:** Warm, lively, garden-style, Ghanaian hospitality
- **Tone:** Professional but friendly, event-focused
- **Colors:** Cream background, brown typography, orange accent, multi-color gradient (orange→red→purple)
- **Tagline:** "One place for food, music, and memorable events"

## Website Purpose

The website serves as:
1. A **marketing storefront** — show the venue, atmosphere, and offerings
2. A **discovery tool** — help visitors find events, menu, location, and hours
3. A **booking channel** — drive event inquiries via email and WhatsApp
4. A **social proof hub** — showcase gallery, ratings, and event count

It is NOT an e-commerce site, nor does it handle online payments or real-time reservations.

## Key Business Contacts

- **Phone:** +233 50 258 4606 / +233 55 759 0224
- **Email:** calenderseventsgh@gmail.com / hello@calendersevents.com
- **WhatsApp:** https://wa.me/233557590224
- **Instagram:** https://www.instagram.com/calendersevents
- **Facebook:** https://www.facebook.com/CalendersEvents?mibextid=wwXIfr&mibextid=wwXIfr

## Why the Website Was Revised

The revision prompt (`calenders_website_revision_prompt.md`) was created because the client wanted:
- Better mobile experience (less wasted space)
- Cleaner, less repetitive content
- A more dynamic gallery
- A simpler restaurant page (to be rebuilt later)
- Booking integrated into the contact page
- Social media presence in the footer

The revisions were a **cleanup and polish pass**, not a redesign. The brand direction, colors, and identity were preserved.

## Key Decisions Made During Revisions

1. **"Book Now" in Navbar links to `/contact#book-event`** — consolidated booking into Contact page rather than maintaining a separate `/booking` route.
2. **"Explore Restaurant" hero button was removed entirely** — only "Book an Event" remains on the hero. The restaurant CTA exists elsewhere (homepage menu preview section).
3. **Weekly Lineup appears ONLY on the homepage** — removed from the Events page to avoid duplication.
4. **Restaurant page was intentionally stripped down** — keeping only the intro and reservations CTA. The full filtered menu (`MenuPreview detailed`) is the long-term foundation.
5. **Gallery uses masonry grid + lightbox** — images have varied spans for visual interest; tap/click opens a full-screen preview.
6. **Booking form uses `mailto:`** — submissions open the user's email app. This was chosen over a backend because it's simple, requires no server, and works immediately.
7. **Footer social icons** — WhatsApp, Facebook, and Instagram have real links (the empty placeholder TikTok/music icon has been removed).
8. **"Plan an Event" button lives in the Private Events section** of the Events page, linking to `/contact#book-event`.

## Future Direction (from DEVELOPER_GUIDE.md)

Highest value next steps:
- Replace Unsplash/stock images with real Calenders venue photography
- Upgrade booking form to submit to a real backend (email, CRM, or serverless endpoint)
- Add floating WhatsApp button across the site
- Add event packages and restaurant/bar packages
- Add testimonials or Google review highlights
- Add downloadable menu PDF (already partially implemented with the menu poster link)
- Add Open Graph images and better page metadata
- Add real social link for TikTok if provided in the future

## Important Constraints

- No backend, no database, no authentication
- No payment integration
- All content is static and edited via `lib/data.js`
- The site must work on slow connections (Ghana mobile networks)
- Brand spelling must remain "Calenders" — never "Calendars"
- The color token `brand-green` is historically misnamed (it's orange) — avoid renaming

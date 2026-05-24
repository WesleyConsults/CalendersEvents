# Calenders Events Developer Guide

This guide is for any developer joining the Calenders Events website project. It explains what the project is, how it is structured, how to run it locally, where content lives, and the main gotchas to avoid.

## Project Overview

Calenders Events is a marketing and booking website for Calenders Events Bar & Lounge in Takoradi, Ghana.

The site presents:

- The venue and brand story
- Weekly events and private event hosting
- Restaurant, kitchen menu, and bar offerings
- Gallery moments
- Contact details and map
- Booking enquiry form and WhatsApp call to action

The app is currently a static frontend. There is no backend, database, CMS, authentication, or payment integration.

## Current Stack

- Next.js 15 App Router
- React 19
- Tailwind CSS v4
- Motion for animations through `motion/react`
- Lucide React for icons
- Plain JavaScript and JSX
- Static data stored in `lib/data.js`

Important note: the existing `README.md` may contain older information from a previous setup. This file is the more accurate project guide.

## Local Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The site runs at:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start a production build locally:

```bash
npm run start
```

## Important Dev Server Gotcha

Do not run `npm run build` while `npm run dev` is still running.

This can corrupt or mix the generated `.next` dev and production assets. The browser may then show plain HTML with default blue links because CSS files such as `/_next/static/css/app/layout.css` return `404`.

If that happens:

1. Stop the dev server.
2. Clear the generated Next cache:

```bash
rm -rf .next
```

3. Restart the dev server:

```bash
npm run dev
```

4. Hard refresh the browser with `Cmd + Shift + R` on macOS.

## Project Structure

```text
app/
  layout.jsx              Root layout with Navbar, Footer, and global metadata
  globals.css             Tailwind CSS v4 theme, fonts, and base styles
  page.jsx                Homepage
  about/page.jsx          About page
  events/page.jsx         Full Events page
  restaurant/page.jsx     Full Restaurant page
  menu/page.jsx           Redirects old /menu route to /restaurant
  booking/page.jsx        Booking page
  contact/page.jsx        Contact page

components/
  About.jsx               About section and venue feature cards
  BookingForm.jsx         Booking enquiry form and WhatsApp CTA
  Contact.jsx             Contact details and Google map
  Events.jsx              Compact and detailed Events layouts
  Footer.jsx              Site footer
  Gallery.jsx             Homepage gallery section
  Hero.jsx                Homepage hero
  MenuPreview.jsx         Restaurant section and detailed restaurant page
  Navbar.jsx              Responsive navigation
  SectionHeading.jsx      Shared animated section heading

lib/
  data.js                 Main content source for events, restaurant, menus, galleries

public/
  logo.png                Brand logo
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage with hero, events preview, restaurant preview, and gallery |
| `/about` | Venue story and venue features |
| `/events` | Full events page with weekly lineup, event flow, private events, services, gallery, and booking CTA |
| `/restaurant` | Full restaurant page with images, guest favourites, kitchen menu, and bar section |
| `/menu` | Redirects to `/restaurant` for backward compatibility |
| `/booking` | Booking enquiry form |
| `/contact` | Contact information and embedded map |

## Content Management

Most site content lives in:

```text
lib/data.js
```

Use this file for:

- Upcoming weekly events
- Weekly lineup infographic content
- Event journey steps
- Private event types
- Event services
- Event gallery images
- Menu highlights
- Restaurant gallery panels
- Restaurant features
- Kitchen menu and bar menu sections
- Homepage gallery images

When adding new content, prefer extending existing arrays instead of hardcoding repeated content directly inside components.

## Key Data Exports

`UPCOMING_EVENTS`

Used for the main event cards on the homepage and Events page.

`WEEKLY_LINEUP`

Used on `/events` to show Thursday, Saturday, and Sunday programming.

`EVENT_JOURNEY`

Used on `/events` for the event-flow infographic.

`PRIVATE_EVENT_TYPES`

Used on `/events` for private event categories.

`EVENT_SERVICES`

Used on `/events` for the "What We Provide" checklist.

`EVENT_GALLERY_IMAGES`

Used on `/events` for the event moments photo strip.

`MENU_HIGHLIGHTS`

Used in restaurant previews and guest favourites.

`RESTAURANT_GALLERY`

Used in the restaurant visual intro.

`RESTAURANT_MENU_SECTIONS`

Used for the Kitchen Menu and Bar Section blocks.

`GALLERY_IMAGES`

Used by the homepage gallery.

## Styling System

Global styling is defined in:

```text
app/globals.css
```

The Tailwind v4 theme defines:

```css
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-display: "Playfair Display", serif;
--color-brand-cream: #FDFBF7;
--color-brand-brown: #795548;
--color-brand-brown-light: #4A3728;
--color-brand-green: #E8621A;
--color-brand-green-dark: #D05515;
```

Current visual language:

- Warm cream background
- Brown typography and footer surfaces
- Orange brand accent currently named `brand-green`
- Rounded cards and large section spacing
- Editorial section headings using Playfair Display
- Motion reveals on scroll
- Unsplash images as temporary placeholders

The color token name `brand-green` is historically inaccurate. It currently maps to orange. Avoid renaming it casually because it is used throughout the codebase.

## Component Patterns

### Section Headings

Use `SectionHeading` for standard section labels and titles:

```jsx
<SectionHeading title="Events at Calenders" subtitle="Live Nights & Private Celebrations" />
```

Set `centered` for centered layouts:

```jsx
<SectionHeading title="Join the Celebration" subtitle="Upcoming Events" centered />
```

### Compact vs Detailed Sections

Some components support a compact homepage version and a detailed route version.

`Events`:

```jsx
<Events />
<Events detailed />
```

`MenuPreview`:

```jsx
<MenuPreview />
<MenuPreview detailed />
```

This keeps the homepage shorter while allowing full pages to tell a deeper story.

## Navigation

The main nav links live in:

```text
components/Navbar.jsx
```

Current links:

- Home
- About
- Events
- Restaurant
- Contact
- Book Now

If you add a new top-level route, update both:

- `components/Navbar.jsx`
- `components/Footer.jsx`

## Images

Most images currently use Unsplash URLs. This is useful for prototyping but should eventually be replaced with real Calenders venue photography.

Best places to replace with real photos:

- Homepage hero
- About collage
- Events hero
- Event moments gallery
- Restaurant visual intro
- Menu highlights
- Homepage gallery

For local images, place assets in:

```text
public/
```

Then reference them as:

```jsx
<img src="/my-image.jpg" alt="Description" />
```

For Next Image usage:

```jsx
import Image from 'next/image';
```

The logo already uses `next/image`.

## Booking Flow

The booking form lives in:

```text
components/BookingForm.jsx
```

Current behavior:

- Client-side state only
- Simulated loading delay
- Shows a success state after submit
- Resets after a few seconds
- No data is sent to a backend

WhatsApp booking link:

```text
https://wa.me/233502584606
```

Recommended future improvement:

- Add fields for package, budget, food/drinks, entertainment needs, and notes
- Send submissions to email, WhatsApp, a CRM, or a serverless endpoint
- Add validation and error states for real submission failures

## Contact and Map

Contact details live inside:

```text
components/Contact.jsx
```

Current contact information:

- Location: Revert Lane, Harbour Area, near Vienna Beach, Takoradi, Ghana
- Phone: `+233 50 258 4606 / 055 759 0224`
- Email: `hello@calendersevents.com`

The map is embedded with an iframe. If the location changes, update the iframe `src` and visible address together.

## Metadata and SEO

Global metadata is in:

```text
app/layout.jsx
```

Route-specific metadata is in each page file, for example:

```text
app/events/page.jsx
app/restaurant/page.jsx
```

Recommended SEO improvements:

- Add stronger page titles for Takoradi event venue, restaurant, bar, karaoke, and live band searches
- Add Open Graph metadata for social sharing
- Add structured data for LocalBusiness, Restaurant, and Event where appropriate
- Add real images for OG previews

## Development Workflow

Before editing:

```bash
git status --short
```

Run locally:

```bash
npm run dev
```

Before committing:

1. Stop the dev server.
2. Run:

```bash
npm run build
```

3. Check changed files:

```bash
git status --short
git diff --stat
```

4. Commit:

```bash
git add <files>
git commit -m "Your commit message"
```

5. Push:

```bash
git push origin main
```

## Deployment Notes

This is a standard Next.js project and should deploy cleanly on platforms that support Next.js, such as Vercel.

Required build command:

```bash
npm run build
```

No environment variables are required at the moment.

## Known Issues and Technical Debt

- The existing `README.md` contains outdated Vite and TypeScript references.
- Most images are stock placeholders and should be replaced with real venue photos.
- The booking form does not submit anywhere yet.
- Newsletter input in the footer is presentational only.
- Footer event links are placeholders using `href="#"`.
- Social icon buttons in Contact.jsx do not link to real social profiles yet (except Instagram and Facebook).
- The color token `brand-green` is actually orange.
- There is no automated test suite.
- There is no lint command configured for the current Next.js version beyond the package script.

## Recommended Next Improvements

Highest value:

- Replace Unsplash images with real Calenders photos.
- Upgrade booking form to submit real enquiries.
- Add a floating WhatsApp button across the site.
- Add event packages and restaurant/bar packages.
- Update the README to match this guide.

Good follow-up polish:

- Add testimonials or Google review highlights.
- Add social link for TikTok.
- Add downloadable menu PDF.
- Add Open Graph images and better page metadata.
- Add gallery route if the venue wants a standalone gallery page.

## Troubleshooting

### Page Looks Like Plain HTML

Cause: CSS or JS assets are not loading, usually because the `.next` cache is stale or mixed.

Fix:

```bash
rm -rf .next
npm run dev
```

Then hard refresh the browser.

### Port 3000 Is Already In Use

Next may start on another port, such as `3001`.

Find the process using port 3000:

```bash
lsof -nP -iTCP:3000 -sTCP:LISTEN
```

Stop it if it is a stale dev server:

```bash
kill <PID>
```

Then restart:

```bash
npm run dev
```

### Route Returns 404 After Adding a Page

Confirm the file is inside `app/` and named `page.jsx`.

Examples:

```text
app/events/page.jsx
app/restaurant/page.jsx
```

Restart the dev server if the route was added while Next was already running.

## Current Git Remote

The project currently pushes to:

```text
git@github.com:WesleyConsults/CalendersEvents.git
```

Main branch:

```text
main
```


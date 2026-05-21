# Calenders Website Revision Prompt for IDE/Codex Agent

## Project Context

This document contains a structured set of requested changes for the Calenders Events Bar & Lounge website.

Website: https://www.calendersgh.com/

The website has the following visible pages/sections:
- Home
- About
- Events
- Gallery
- Restaurant
- Contact
- Booking / Book Now

The main goal of these revisions is to make the site feel cleaner, less repetitive, more professional on mobile, and easier for visitors to use. The changes should be implemented carefully without unnecessarily redesigning the whole website.

## General Instructions for the Agent

Before making changes:
1. Inspect the existing codebase and identify how pages, sections, buttons, layout spacing, gallery images, footer, and routes are currently implemented.
2. Preserve the existing brand direction, colors, imagery, and overall identity unless a specific change below says otherwise.
3. Avoid making unrelated changes.
4. Focus strongly on mobile responsiveness, because many of the issues were noticed in mobile view.
5. After implementation, test the pages on mobile and desktop widths.
6. Make sure all pages still build successfully without console errors or broken routes.
7. Maintain the spelling `Calenders` wherever the brand name is used.

---

# Revision 1: Reduce Excessive Top Spacing on Mobile Pages

## Problem

On mobile view, the main page content starts too far below the header/navigation area. This creates a large empty vertical gap before the first visible heading or text appears.

This issue appears across multiple pages, including:
- Home
- About
- Events
- Gallery
- Restaurant
- Contact
- Booking / Book Now, if applicable

The page content feels pushed down too much, especially on mobile screens.

## Required Change

Reduce the top padding or margin applied to the first major section of each page, especially on mobile view.

The first heading, intro text, or hero content should appear much closer to the header. The spacing should still feel comfortable, but it should not look like a large blank area before the page begins.

## Implementation Guidance

Look for:
- Page-level `padding-top`
- Hero section `padding`
- Mobile-specific classes such as `pt-*`, `py-*`, `mt-*`, `min-h-*`
- Layout wrappers that may add extra spacing below the header
- Header offset values that may be too large
- Shared page section components used across several pages

Reduce spacing globally if the issue comes from a shared page layout component. If each page has its own spacing, adjust each page individually.

## Acceptance Criteria

- On mobile, the first visible content begins shortly after the header.
- There is no large empty vertical gap between the navbar/header and the first page content.
- The pages still breathe visually and do not feel cramped.
- The fix applies consistently across all main pages.

---

# Revision 2: Adjust Homepage Hero Button Styling and Size

## Problem

On the homepage hero section, there are two main call-to-action buttons:
- `Book an Event`
- `Explore Restaurant`

The `Explore Restaurant` button currently has a translucent or semi-transparent style. This is not preferred.

The `Book an Event` button is too large and visually dominant. It should still be noticeable, but it needs to feel more balanced.

## Required Change

1. Remove the translucent / semi-transparent styling from the `Explore Restaurant` button.
2. Make the `Explore Restaurant` button more solid, clean, and professional.
3. Reduce the size of the `Book an Event` button slightly.
4. The `Book an Event` button should remain visually important, but it should not look oversized, especially on mobile.

## Implementation Guidance

Look for the homepage hero buttons and adjust:
- Background opacity
- Border opacity
- Backdrop blur
- Transparent background classes
- Button padding
- Button height
- Font size if needed
- Gap between buttons if needed
- Mobile button sizing

If the buttons use a shared button component, avoid changing all buttons globally unless that is intended. Prefer applying a variant or page-specific class.

## Acceptance Criteria

- `Explore Restaurant` no longer looks translucent.
- `Explore Restaurant` appears solid and readable.
- `Book an Event` is smaller and more balanced.
- Both buttons still look clickable and professional.
- The hero section still has a strong call-to-action without looking overcrowded.

---

# Revision 3: Replace “Open-air Garden Seating” Text Under Reggae Thursdays

## Problem

On the homepage Weekly Lineup section, under `Reggae Thursdays`, the supporting description currently includes:

`Open-air garden seating, good food, and relaxed after-work energy.`

The phrase `Open-air garden seating` does not feel like the best description for the reggae event. The wording should feel more connected to the music, vibe, and Thursday reggae experience.

## Required Change

Replace the current line with a more appropriate reggae-themed description.

## Recommended Replacement Text

Use this text:

`Live reggae rhythms, good food, and relaxed after-work vibes.`

Alternative acceptable options:
- `Feel-good reggae music, good food, and relaxed after-work energy.`
- `Reggae sounds, chilled drinks, good food, and a relaxed Thursday vibe.`
- `Laid-back reggae rhythms, good food, and an easy Thursday-night atmosphere.`

## Implementation Guidance

Search for the existing phrase:

`Open-air garden seating, good food, and relaxed after-work energy.`

Replace it with the recommended text above.

Make sure this change applies to the homepage Weekly Lineup section. If the same text appears in a section that will be removed on the Events page, do not worry about preserving it there.

## Acceptance Criteria

- The Reggae Thursdays description sounds more connected to reggae/music.
- The phrase `Open-air garden seating` is removed from that description.
- The new wording still feels natural and fits the site tone.

---

# Revision 4: Add Social Media Icon Framework to the Footer

## Problem

The footer currently has brand text, opening hours, quick links, and event categories, but it does not have a dedicated social media icon area.

The website should have social icons in the footer so visitors can later tap them to visit Calenders social media/contact channels.

## Required Change

Add a social media icon section to the footer.

The footer should include icons for:
- WhatsApp
- Facebook
- Instagram
- TikTok

For now, these can use placeholder links because the final social URLs may be added later.

## Implementation Guidance

Add the icons in a clean footer section, preferably near the brand description or below the quick links.

Suggested placeholder behavior:
- WhatsApp: use `#` or a placeholder `https://wa.me/` link until the final number is confirmed.
- Facebook: use `#`
- Instagram: use `#`
- TikTok: use `#`

If the project already uses an icon library such as Lucide, React Icons, Font Awesome, or similar, use the existing icon system. Do not add a heavy dependency unless necessary.

The icons should:
- Be evenly spaced
- Be tap-friendly on mobile
- Have accessible labels such as `aria-label="WhatsApp"`
- Match the existing footer design
- Appear consistently on all pages where the shared footer is used

## Suggested Footer Label

Use a small label such as:

`Follow Us`

or

`Connect With Us`

## Acceptance Criteria

- Footer shows WhatsApp, Facebook, Instagram, and TikTok icons.
- Icons appear on all pages using the footer.
- Icons are visually aligned and mobile-friendly.
- Links can be placeholder links for now.
- Footer does not become cluttered.

---

# Revision 5: Clean Up the Events Page and Reposition the “Plan an Event” Button

## Problem

The Events page currently has two buttons near the top:
- `Plan an Event`
- `See Weekly Lineup`

Further down the page, there is a repeated section:
- `Weekly Lineup`
- `Your Week at Calenders`

This section includes:
- Reggae Thursdays
- Karaoke Saturdays
- Sunday Live Band

This feels repetitive because similar event information already appears above on the same Events page.

## Required Change

1. Remove the two top buttons:
   - `Plan an Event`
   - `See Weekly Lineup`

2. Remove the entire repeated section:
   - Section label: `Weekly Lineup`
   - Heading: `Your Week at Calenders`
   - All related event cards/items under that section, including Reggae Thursdays, Karaoke Saturdays, and Sunday Live Band.

3. Do not delete the `Plan an Event` button completely. Instead, move or recreate that button inside the `Private Events` section.

4. The `Plan an Event` button should appear in the section with the heading:
   - `Book the Space for Your Own Celebration`

This is a better location because the button is directly related to private event bookings.

## Implementation Guidance

On the Events page:
- Locate the top hero/introduction section and remove the CTA button group.
- Locate the repeated `Weekly Lineup / Your Week at Calenders` section and remove the whole block.
- Locate the `Private Events` section.
- Add the `Plan an Event` button near the text:
  `Book the Space for Your Own Celebration`

Button behavior:
- The `Plan an Event` button should link to the booking/contact flow.
- If the site currently routes booking through `/booking`, keep the link consistent unless Revision 8 changes the booking route to the Contact page.
- If Revision 8 is implemented, this button can link to `/contact` or `/contact#book-event`, depending on how the booking section is integrated.

## Acceptance Criteria

- Top Events page buttons are removed.
- The duplicate `Weekly Lineup / Your Week at Calenders` section is removed.
- The Events page no longer repeats Reggae Thursdays, Karaoke Saturdays, and Sunday Live Band in two similar sections.
- `Plan an Event` appears in the Private Events section.
- The page still has a clear booking CTA, but in a more relevant location.

---

# Revision 6: Redesign Gallery Layout and Add Image Preview

## Problem

The Gallery page currently displays images in a very uniform box/grid layout. The pictures are good, but the layout feels too plain because the images are arranged in equal blocks, usually two at a time.

The gallery should feel more dynamic, modern, and visually interesting.

Also, users should be able to tap/click an image and preview it in a larger view.

## Required Change

1. Replace the equal-box gallery grid with a more irregular, dynamic layout.
2. Use a masonry-style or magazine-style gallery layout.
3. Some images should appear larger, others medium, and others smaller.
4. The layout should still feel neat and intentional, not messy.
5. Add image preview functionality.
6. When a user taps/clicks a gallery image, it should open in a larger preview modal/lightbox.
7. The preview should be easy to close.

## Implementation Guidance

Possible layout approaches:
- CSS masonry columns
- CSS grid with varying row/column spans
- A responsive masonry component
- Manual layout pattern with different image sizes

For mobile:
- The layout should not become confusing.
- It can use one column or a simplified masonry layout.
- Images should still have visual variation where possible.

For tablet/desktop:
- Use more variation in image width/height.
- Avoid a boring equal-card grid.

Image preview modal/lightbox should include:
- Enlarged selected image
- Dark or blurred overlay
- Close button
- Click outside to close if possible
- Escape key close if feasible
- Image alt text support
- Optional previous/next navigation only if easy to implement

Do not overcomplicate the gallery. The main requirement is:
- More dynamic layout
- Tap to preview image

## Acceptance Criteria

- Gallery no longer looks like a basic equal two-column grid.
- Images have varied sizes or a masonry-style flow.
- User can click/tap any image to open a larger preview.
- Preview can be closed easily.
- Gallery remains responsive and visually clean on mobile.

---

# Revision 7: Simplify the Restaurant Page

## Problem

The Restaurant page has a good top intro section, but the rest of the page currently feels unsuitable and should be removed so the page can be rebuilt later from a cleaner starting point.

The top intro section currently includes:
- Label: `The Restaurant`
- Heading: `Restaurant & Bar Experience`
- Supporting paragraph about Calenders being more than an event venue, with restaurant and lounge experience.

This top text should remain.

There is also a useful bottom call-to-action section:
- `Reservations & Events`
- `Planning an event with food and drinks?`
- `Book the Venue`

That bottom section can remain.

## Required Change

Keep only:
1. The top intro section:
   - `The Restaurant`
   - `Restaurant & Bar Experience`
   - The supporting paragraph below it

2. The bottom booking/reservation section:
   - `Reservations & Events`
   - `Planning an event with food and drinks?`
   - Supporting text
   - `Book the Venue` button

Remove everything between those two sections.

## Sections to Remove

Remove the current middle Restaurant page content, including sections such as:
- Garden Dining
- Chef-Crafted Plates
- Lounge & Bar
- Dining at Calenders
- Guest Favourites
- Kitchen Menu
- Bar Section
- Food and drink cards
- Menu item lists
- Any placeholder food pricing cards or repeated food/drink blocks

## Implementation Guidance

This page should become intentionally simple for now.

The final Restaurant page structure should be:

1. Header/navbar
2. Restaurant intro section
3. Blank/simple spacing area or direct transition
4. Reservation/Event CTA section
5. Footer

Do not redesign the removed content yet. The goal is to clear the unwanted sections so new content can be planned later.

## Acceptance Criteria

- Restaurant page keeps the `Restaurant & Bar Experience` heading and intro paragraph.
- All unwanted middle content is removed.
- Bottom Reservations & Events CTA remains.
- Page does not look broken or awkward after removing content.
- Spacing between remaining sections is clean and balanced.

---

# Revision 8: Improve Contact Page by Integrating the Booking Section

## Problem

The Contact page currently feels too dry. It mainly shows:
- Find Us
- Let’s Connect
- Location
- Phone number
- Email address
- Map area

The `Book Now` / `Book an Event` experience currently exists separately on the booking page. The preferred experience is for the Contact page to include the event booking section at the top.

## Required Change

Update the Contact page so that its first major section is the event booking section.

The Contact page should begin with the same or similar content currently used on the Booking page:
- `Make a Reservation`
- `Ready to Book Your Event?`
- `Book Your Experience`
- Booking form fields
- WhatsApp booking option
- Supporting stats if appropriate

After this booking section, keep the normal contact content below it:
- Location
- Phone number
- Email address
- Map

## Navigation / Route Behavior

The menu button currently labeled `Book Now` or `Book an Event` should lead users to the Contact page booking area.

Preferred route options:
1. Link `Book Now` directly to `/contact#book-event`
2. Or link it to `/contact` if the booking section is placed at the top of the Contact page

If the project currently has a separate `/booking` page, decide whether to:
- Keep it but redirect or link users toward Contact, or
- Reuse its booking component inside Contact, or
- Remove/deprecate it only if safe and no routes break

Do not break any existing navigation without checking the routing system first.

## Implementation Guidance

Best approach:
1. Extract the current booking form/booking content into a reusable component if it is not already reusable.
2. Place that component at the top of the Contact page.
3. Add an `id="book-event"` or similar anchor to the booking section.
4. Update the navbar `Book Now` link to point to `/contact#book-event`.
5. Keep the original contact details and map below the booking section.
6. Ensure the page flows naturally:
   - Booking first
   - Contact details second
   - Map/location last or beside contact details on larger screens

## Acceptance Criteria

- Contact page no longer feels empty or dry.
- Contact page starts with a booking/event reservation section.
- Navbar `Book Now` or `Book an Event` leads to the Contact page booking area.
- Existing contact information remains below the booking section.
- Map remains visible below the booking/contact information.
- Booking form still works or remains visually intact if functionality is not yet connected.
- Mobile layout is clean and easy to follow.

---

# Final QA Checklist

After implementing all revisions, test the website carefully.

## Mobile Checks

Test at common mobile widths:
- 360px
- 375px
- 390px
- 414px
- 430px

Confirm:
- No large blank space below the header.
- Buttons are not too large.
- Buttons do not overflow.
- Gallery preview works.
- Footer social icons are tap-friendly.
- Contact booking section looks good on mobile.
- Restaurant page does not look broken after content removal.

## Desktop Checks

Confirm:
- Layouts still look professional on larger screens.
- Gallery masonry/irregular layout looks intentional.
- Footer icons align properly.
- Events page does not feel empty after removing duplicate content.
- Restaurant page spacing feels clean.

## Navigation Checks

Confirm these links still work:
- Home
- About
- Events
- Gallery
- Restaurant
- Contact
- Book Now / Book an Event

Confirm booking-related CTAs point to the correct place:
- Homepage `Book an Event`
- Events page `Plan an Event`
- Restaurant page `Book the Venue`
- Navbar `Book Now`

## Content Checks

Confirm:
- Brand spelling remains `Calenders`.
- The homepage Reggae Thursdays text has been updated.
- No duplicate Events page Weekly Lineup section remains.
- Footer includes WhatsApp, Facebook, Instagram, and TikTok icons.
- Contact page includes booking first, then contact details/map.
- No accidental content removal beyond what was requested.

---

# Suggested Implementation Order

Recommended order for the agent:

1. Fix shared mobile top spacing across pages.
2. Adjust homepage hero buttons.
3. Update Reggae Thursdays text.
4. Add footer social media icon framework.
5. Clean up Events page and reposition `Plan an Event`.
6. Redesign Gallery layout and add preview modal/lightbox.
7. Simplify Restaurant page.
8. Integrate Booking section into Contact page and update navigation.
9. Run full QA on mobile and desktop.
10. Build/test before finalizing.

---

# Important Non-Goals

Do not do the following unless specifically asked later:

- Do not rewrite all website copy.
- Do not change the main brand colors.
- Do not replace all images.
- Do not redesign the entire website from scratch.
- Do not remove the footer.
- Do not remove useful contact details.
- Do not remove booking functionality.
- Do not change the brand spelling from `Calenders` to `Calendars`.
- Do not add real social media links unless confirmed.
- Do not remove routes without checking whether they are still referenced elsewhere.

---

# Summary for the Agent

Implement a careful cleanup and improvement pass across the Calenders website. The main priorities are better mobile spacing, cleaner homepage CTAs, more relevant event wording, social icons in the footer, a less repetitive Events page, a more dynamic Gallery with image preview, a simplified Restaurant page, and a stronger Contact page that includes the booking experience at the top.

Keep the work focused, polished, responsive, and consistent with the existing Calenders brand.

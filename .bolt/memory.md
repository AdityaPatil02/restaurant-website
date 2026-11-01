# Project memory

## Product intent & audience

- Premium restaurant website ("Zaika") targeting diners in India
- Single-page marketing site: hero, intro, menu, gallery, about, contact, map, WhatsApp CTA
- Audience: prospective diners browsing on mobile and desktop

## Brand personality & voice

- Premium, elegant, modern Indian dining
- Tone: sophisticated and inviting, not casual

## Visual design & UX direction

- Dark + gold premium palette
- Cormorant Garamond for headings; body font paired (serif/sans contrast)
- Full-screen hero section
- Menu: filterable, with photos, prices, veg/non-veg markers
- Gallery: image grid with full-screen lightbox viewer
- Contact section with enquiry form that opens WhatsApp
- Google Maps embed for location
- Floating WhatsApp button (persistent)
- Smooth animations, attractive typography throughout
- Fully responsive (mobile + desktop)

## Decisions, constraints & rationale

- Framework: Vite + React + JSX + Tailwind CSS + Lucide React icons (per `.bolt/prompt`)
- `@/` path alias maps to `src/`; used for all project imports
- Content/data centralized in `src/data/restaurant.ts` and `src/data/menu.ts` for easy editing
- Stock food photos sourced from Pexels; user to swap with real photos later
- Restaurant name "Zaika" is placeholder; user to replace with real details
- Build, type check, and lint all pass; layout not visually verified in browser

## Open questions & assumptions

- Assumed placeholder content acceptable (name, phone, WhatsApp, email, address, hours, story, menu items/prices)
- Real restaurant details, WhatsApp number, and Google Maps embed key needed before publishing
- User has not yet confirmed mobile/desktop layout quality
- Brand identity (real name, logo, exact menu) pending from owner
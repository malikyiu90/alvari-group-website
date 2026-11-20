# Alvari Group — roofing, Leicestershire

Next.js (App Router) + React + TypeScript. Deploys to Vercel with no configuration.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Why it moved off static HTML

The site was twelve hand-maintained `.html` files. The header and footer were
copied into every one, so a phone-number change meant twelve edits, and the
seven service pages were seven near-identical files.

Now the header and footer are written once, and the seven service pages are
**one template plus one data file**. Adding an eighth service is an entry in
`lib/services.ts` — no new page, no new route, and it appears in the nav, the
footer, the services index, the sitemap and the related-services grid on its own.

## Layout

```
app/
  layout.tsx              shell, fonts, JSON-LD, Header + Footer
  page.tsx                homepage
  globals.css             the whole design system
  services/page.tsx       services index
  services/[slug]/page.tsx  one template -> seven pages
  privacy|terms|security/ legal pages
  sitemap.ts robots.ts    generated, never hand-edited again
components/               Header, Footer, MobileMenu, EnquiryForm,
                          ServiceAreaMap, Reveal, BrandMark, Icons
lib/
  site.ts                 phone, email, hours, towns, nav, steps, projects
  services.ts             the seven services, typed
public/images/            WebP photography
```

**Change the phone number in `lib/site.ts` and it changes everywhere** — top bar,
header button, mobile menu, process section, every service page, the footer and
the structured data.

## What React bought that the HTML could not

- `next/image` serves AVIF where the browser takes it, with a correct `srcset`
  per slot, so a phone no longer downloads a desktop-sized photo.
- The mobile menu, the enquiry form and the map fallback are components with
  real state instead of three hand-rolled scripts.
- `generateStaticParams` prerenders every service page at build time — same
  static output, none of the duplication.
- Metadata and JSON-LD are generated per route, so a new page cannot ship
  without a title and description.

## Before it is genuinely finished

The first four have legal weight in the UK.

- [ ] **Company number and VAT number** — footer. A UK limited company must show
      its registered name and number on its website (Companies Act 2006).
- [ ] **Registered address** — footer still says `Unit 4, Example Works`.
- [ ] **Email address** — `office@alvarigroup.co.uk` was assumed, not verified.
- [ ] **Legal pages** — every `to be confirmed` filled in, and a solicitor's read
      of the 14-day cancellation section in `/terms`. Getting that wrong makes a
      consumer contract unenforceable.
- [ ] **ICO registration number** — most trades handling customer data need one.
- [ ] **Certification numbers** — the footer slots marked `is-empty`. Only list a
      standard you actually hold a current certificate for.
- [ ] **Google reviews link** — `site.googleProfile` points at `google.com/maps`.
      Replace with the real Business Profile URL.
- [ ] **The enquiry form does not send anything yet.** It validates and shows a
      confirmation, but there is no backend. Wire it to a Vercel route handler,
      Formspree, or a Resend email before launch.

## Content notes

- **No fabricated reviews.** The Reviews section invites them until the Google
  profile has real ones. Fake reviews are unlawful under the Digital Markets,
  Competition and Consumers Act 2024.
- **No accreditation badges** (NFRC, TrustMark, CompetentRoofer). Claiming
  membership you do not hold is an offence under the CPRs. Add them when the
  certificates exist.
- **Photography** is Unsplash stock — see `public/images/CREDITS.txt`. Modern UK
  roofs, no people in frame. Alvari's own job photographs are the biggest upgrade
  available, especially in Recent Work.
- **Light-only.** The brand is navy and orange on white; the dark variant made the
  header unreadable, so `color-scheme` is pinned to light.
- **Map** is the official OpenStreetMap embed — no API key, no tile-policy breach.

## Editing

Colours, spacing, radii and the type scale are tokens in the `:root` block at the
top of `app/globals.css`. The logo is hand-drawn SVG in `components/BrandMark.tsx`
and `public/favicon.svg`; `public/images/logo-original.jpg` is the master.

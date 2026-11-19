# Alvari Group — roofing, Leicestershire

Static marketing site. No build step: the files in this repo are the site.

| | |
|---|---|
| Deploy | Vercel (static, no framework) |
| Pages | `index.html`, `privacy.html`, `terms.html`, `security.html` |
| Shared | `styles.css`, `site.js`, `favicon.svg`, `images/` |

## Local preview

```bash
python -m http.server 8000
# http://localhost:8000
```

Open it over HTTP, not by double-clicking the file — `styles.css` and `site.js`
are loaded as separate files and `file://` will block them.

## Deploying to Vercel

1. Vercel → **Add New → Project** → import `malikyiu90/alvari-group-website`.
2. Framework preset: **Other**. Leave build command and output directory empty.
3. Deploy. `vercel.json` sets the caching and security headers.
4. Add `alvarigroup.co.uk` under **Settings → Domains** and point the DNS at Vercel.

## Before this is genuinely finished

These are real gaps, not nitpicks. The first three have legal weight in the UK.

- [ ] **Company number and VAT number** — footer legal line. A UK limited company
      must show its registered name and number on its website (Companies Act 2006).
- [ ] **Registered address** — footer still says `Unit 4, Example Works`.
- [ ] **Email address** — `hello@alvarigroup.co.uk` was assumed, not verified.
- [ ] **Privacy / terms / security** — every `to be confirmed` filled in, and a
      solicitor's read of the 14-day cancellation section in `terms.html`.
      Getting that wrong makes a consumer contract unenforceable.
- [ ] **ICO registration number** — most trades handling customer data need one.
- [ ] **Certification numbers** — the footer slots marked `is-empty`. Only list a
      standard you actually hold a current certificate for.
- [ ] **Google reviews link** — the Reviews section points at `google.com/maps`.
      Replace it with the real Business Profile review URL.

## Content notes

- **Photography** is Unsplash stock (see `images/CREDITS.txt`), chosen as modern UK
  roofs with no people in frame. Alvari's own job photographs are the single
  biggest upgrade available, especially in the Recent Work gallery.
- **No fabricated reviews.** The Reviews section is an honest invitation until the
  Google profile has real ones. Fake reviews are directly unlawful under the
  Digital Markets, Competition and Consumers Act 2024.
- **No accreditation badges** (NFRC, TrustMark, CompetentRoofer). They were removed
  because claiming membership you do not hold is an offence under the CPRs. Add them
  back once the certificates exist.
- **Map** is the official OpenStreetMap embed — no API key, no tile-policy breach.
  A keyed provider (MapTiler, Stadia) would allow custom styling and markers.

## Performance

`hero.jpg` and `cta.jpg` are true 4K and around 1.2–1.7 MB each. Convert the whole
`images/` folder to WebP before launch — typically 60–70% smaller with no visible
difference, which matters on mobile data.

## Editing

- Colours, spacing and type live in the `:root` token block at the top of `styles.css`.
- The logo is hand-drawn SVG in three places: `.brand` (header), `.ftr2 .logo`
  (footer) and `favicon.svg`. `images/logo-original.jpg` is the master.

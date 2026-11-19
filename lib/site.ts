export const site = {
  name: 'Alvari Group',
  legalName: 'Alvari Group',
  tagline: 'Your complete roofing experts, 24 hours a day.',
  url: 'https://www.alvarigroup.co.uk',
  phone: '07483 172469',
  phoneHref: 'tel:+447483172469',
  phoneE164: '+44 7483 172469',
  email: 'hello@alvarigroup.co.uk',
  hours: 'Open 24 hours, 7 days a week',
  hoursShort: 'Open 24/7',
  region: 'Leicestershire',
  /** Replace with the real Google Business Profile review link. */
  googleProfile: 'https://www.google.com/maps',
} as const

export const nav = {
  left: [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About Us' },
    { href: '/services', label: 'Services', caret: true },
    { href: '/#areas', label: 'Service Areas' },
  ],
  right: [
    { href: '/#reviews', label: 'Reviews' },
    { href: '/#work', label: 'Our Work' },
    { href: '/#quote', label: 'Contact' },
  ],
  mobile: [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About us' },
    { href: '/services', label: 'Services' },
    { href: '/#process', label: 'How we work' },
    { href: '/#work', label: 'Our work' },
    { href: '/#reviews', label: 'Reviews' },
    { href: '/#areas', label: 'Service areas' },
    { href: '/#blog', label: 'Blog' },
  ],
} as const

export const towns = [
  { name: 'Leicester', featured: true },
  { name: 'Loughborough' },
  { name: 'Hinckley' },
  { name: 'Melton Mowbray' },
  { name: 'Market Harborough' },
  { name: 'Coalville' },
  { name: 'Oadby' },
  { name: 'Wigston' },
  { name: 'Syston' },
  { name: 'Lutterworth' },
  { name: 'Ashby-de-la-Zouch' },
  { name: 'Shepshed' },
  { name: 'Narborough' },
  { name: 'Blaby' },
  { name: 'Earl Shilton' },
] as const

export const marqueeItems = [
  'Roof Repairs',
  'Re-Roofing & New Roofs',
  'Flat Roofing',
  'Slate & Tile',
  'Guttering & Fascias',
  'Chimney & Leadwork',
  'Storm Damage Response',
  'Commercial Roofing',
] as const

export const steps = [
  {
    title: 'Call or send photos',
    body: 'Ring us or send a picture of the problem. We will say straight away whether it needs a survey at all.',
  },
  {
    title: 'Free roof survey',
    body: 'Ladder or drone inspection, moisture readings where needed, and photographs of every defect we find.',
  },
  {
    title: 'Fixed written quote',
    body: 'Itemised and valid for 60 days. We walk you through it and say plainly what can wait and what cannot.',
  },
  {
    title: 'The work itself',
    body: 'Scaffold up, job done with the materials on your quote, site swept at the end of every day.',
  },
  {
    title: 'Signed off and guaranteed',
    body: 'Final inspection together, waste taken away, and your written guarantee issued within five days.',
  },
] as const

export const whyCards = [
  {
    icon: 'M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6',
    title: 'Workmanship you can inspect',
    body: 'We photograph every defect before and every fix after, and hand you the file. Nothing is hidden under a new tile.',
  },
  {
    icon: 'M12 2 4 6v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V6zM9 12l2 2 4-4',
    title: 'Fully insured',
    body: 'Covered for public liability, and happy to send you the certificate before we set foot on your property.',
  },
  {
    icon: 'M12 21s-7-4.6-7-10a7 7 0 0 1 14 0c0 5.4-7 10-7 10m0-12a2 2 0 1 0 0 4 2 2 0 0 0 0-4',
    title: 'Leicestershire specialists',
    body: 'We know what the local weather does to a roof, and which materials the conservation officers will pass.',
  },
  {
    icon: 'M4 20h16M6 20V9l6-5 6 5v11M10 20v-5h4v5M9 4 6 2M15 4l3-2',
    title: 'One team, start to finish',
    body: 'The person who surveys your roof is on site when the work happens. No subcontracted strangers on your scaffold.',
  },
] as const

export const projects = [
  { img: 'work1', ratio: '4 / 3', caption: 'Clarendon Park LE2 — Full re-roof' },
  { img: 'work2', ratio: '3 / 4', caption: 'Loughborough LE11 — New tiled roof' },
  { img: 'work3', ratio: '1 / 1', caption: 'Oadby LE2 — EPDM flat roof' },
  { img: 'work4', ratio: '3 / 4', caption: 'Hinckley LE10 — New build roof' },
  { img: 'work5', ratio: '4 / 3', caption: 'Syston LE7 — Ridge and verge renewed' },
  { img: 'work6', ratio: '1 / 1', caption: 'Market Harborough LE16 — Guttering renewal' },
] as const

export const posts = [
  {
    img: 'blog1',
    month: 'Nov',
    day: '04',
    title: 'How to get your roof through a Leicestershire winter',
    body: 'The five checks worth doing before the first proper gale, and the two that genuinely need a roofer.',
  },
  {
    img: 'blog2',
    month: 'Oct',
    day: '21',
    featured: true,
    title: 'How to tell a real roofer from a cowboy',
    body: 'What to ask for before anyone climbs a ladder: insurance, accreditation numbers, and a written quote that itemises scaffold.',
  },
  {
    img: 'blog3',
    month: 'Oct',
    day: '09',
    title: 'Storm damage and your insurance claim',
    body: 'What your insurer will want photographed, when make-safe work is covered, and why you should never agree to cash in hand.',
  },
] as const

import Link from 'next/link'
import { site } from '@/lib/site'
import { services } from '@/lib/services'
import BrandMark from './BrandMark'

const quickLinks = [
  ['/#about', 'About us'],
  ['/#why', 'Why choose us'],
  ['/#process', 'How we work'],
  ['/#work', 'Our work'],
  ['/#reviews', 'Reviews'],
  ['/#blog', 'Blog'],
]

const areas = ['Leicester', 'Loughborough', 'Hinckley', 'Melton Mowbray', 'Market Harborough', 'Coalville']

const certs: [string, string][] = [
  ['ISO 9001', 'Quality management'],
  ['ISO 14001', 'Environmental management'],
  ['ISO 45001', 'Health & safety'],
  ['Public liability', 'Policy number'],
]

const socials = [
  { label: 'Google reviews', brand: true, d: 'M12 2 14.9 8.6 22 9.3l-5.3 4.7L18.2 21 12 17.3 5.8 21l1.5-7L2 9.3l7.1-.7z' },
  { label: 'Facebook', d: 'M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6c-.3-.04-1.3-.13-2.5-.13-2.46 0-4.15 1.5-4.15 4.27v2.16H7.3V14h2.75v8z' },
  { label: 'LinkedIn', d: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9.5h4v11H3zm7 0h3.8v1.5h.06c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.77v5.68h-4v-5.04c0-1.2-.02-2.75-1.78-2.75-1.78 0-2.05 1.3-2.05 2.66v5.13h-4z' },
]

export default function Footer() {
  return (
    <footer className="ftr2">
      <div className="wrap">
        <div className="ftr2-grid">
          <div className="ftr2-about">
            <Link className="logo" href="/">
              <BrandMark uid="lgb" className="logo-mark" width={50} height={38} />
              <span className="logo-txt">ALVARI GROUP</span>
            </Link>
            <p>
              Repairs, re-roofing, flat roofing and leadwork across Leicester, Loughborough
              and Leicestershire. Free survey, fixed written quote, written workmanship guarantee.
            </p>
            <div className="ftr2-socials">
              {socials.map((s) => (
                <a key={s.label} href={site.googleProfile} aria-label={s.label}
                   target="_blank" rel="noopener noreferrer">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Quick links</h4>
            <ul>{quickLinks.map(([h, l]) => <li key={h}><Link href={h}>{l}</Link></li>)}</ul>
          </div>

          <div>
            <h4>Our services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.nav}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Service areas</h4>
            <ul>{areas.map((a) => <li key={a}><Link href="/#areas">{a}</Link></li>)}</ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={site.phoneHref}>{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>Unit 4, Example Works<br />Leicester LE1 (address to confirm)</li>
              <li>Open 24 hours<br />7 days a week</li>
            </ul>
            <div className="ftr2-badges">
              <span>Fully insured</span><span>Free surveys</span>
              <span>24-hour call-out</span><span>Written guarantee</span>
            </div>
          </div>
        </div>

        {/* Fill a number in, then drop the is-empty class. Only list a standard
            Alvari actually holds a current certificate for. */}
        <div className="ftr2-certs">
          <h4>Certifications &amp; registrations</h4>
          <ul>
            {certs.map(([name, note]) => (
              <li key={name}>
                <span>{name}</span> <small>{note}</small> <b className="is-empty" />
              </li>
            ))}
          </ul>
        </div>

        <div className="ftr2-bar">
          <span>
            &copy; {new Date().getFullYear()} {site.legalName} &middot; Company no.{' '}
            <b className="is-empty" /> &middot; VAT no. <b className="is-empty" />
          </span>
          <span>
            <Link href="/privacy">Privacy notice</Link> &middot;{' '}
            <Link href="/terms">Terms</Link> &middot;{' '}
            <Link href="/security">Security</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

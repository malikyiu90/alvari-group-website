import Link from 'next/link'
import { site, nav } from '@/lib/site'
import BrandMark from './BrandMark'
import MobileMenu from './MobileMenu'
import { Phone, Mail, Caret } from './Icons'

export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span className="topbar-hours">
            <span className="live-dot" aria-hidden="true" />
            <span className="hours-full">{site.hours}</span>
            <span className="hours-tight">{site.hoursShort}</span>
          </span>
          <span className="topbar-right">
            <a className="topbar-call" href={site.phoneHref}
               aria-label={`Call ${site.name} on ${site.phone}`}>
              <Phone />
              <span className="call-word">Call</span> {site.phone}
            </a>
            <a className="topbar-mail" href={`mailto:${site.email}`}>
              <Mail /> {site.email}
            </a>
          </span>
        </div>
      </div>

      <header className="nav" id="top">
        <div className="wrap">
          <div className="nav-side nav-l">
            {nav.left.map((l) => (
              <Link key={l.href + l.label} className="nlink" href={l.href}>
                {l.label}{'caret' in l && l.caret ? <> <Caret /></> : null}
              </Link>
            ))}
            <MobileMenu />
          </div>

          <div className="brand-slot">
            <Link className="brand" href="/">
              <BrandMark uid="lga" className="brand-mark" width={44} height={33} />
              <span className="brand-name">{site.name}</span>
            </Link>
          </div>

          <div className="nav-side nav-r">
            {nav.right.map((l) => (
              <Link key={l.href} className="nlink" href={l.href}>{l.label}</Link>
            ))}
            <a className="btn btn--navy btn--sm nav-call" href={site.phoneHref}
               aria-label={`Call ${site.name} on ${site.phone}`}>
              <span className="nav-call-ico"><Phone size={17} /></span>
              <span className="nav-call-txt"><i className="btn-sq" />Call Us Today</span>
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

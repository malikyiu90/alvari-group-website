import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { services } from '@/lib/services'
import { Sq } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Roofing services in Leicestershire',
  description: 'Roof repairs, re-roofing, flat roofing, slate and tile, guttering, chimneys and storm damage across Leicestershire.',
  alternates: { canonical: '/services' },
}

export default function ServicesIndex() {
  return (
    <>
      <section className="band doc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <b>Services</b>
          </nav>
          <h1>Our roofing services</h1>
          <p>
            Pitched and flat, repair and replacement, domestic and commercial &mdash; across
            Leicester, Loughborough, Hinckley and the whole of Leicestershire.
          </p>
        </div>
      </section>

      <section className="band pad">
        <div className="wrap">
          <div className="svc-cards svc-cards--all">
            {services.map((s, i) => (
              <Link className="svccard" href={`/services/${s.slug}`} key={s.slug}>
                <div className="svccard-media">
                  <Image src={`/images/${s.img}.webp`} alt="" fill sizes="(max-width:620px) 92vw, 30vw" />
                </div>
                <div className="svccard-body"><h3>{s.nav}</h3><p>{s.short}</p></div>
                <span className={`btn ${i === 0 ? 'btn--orange' : 'btn--navy'}`}><Sq />View Service</span>
              </Link>
            ))}
          </div>
          <p className="svcs-foot">
            Not sure which you need? Send a photo and we will tell you straight away.{' '}
            <Link href="/#quote">Get a free estimate</Link>
          </p>
        </div>
      </section>
    </>
  )
}

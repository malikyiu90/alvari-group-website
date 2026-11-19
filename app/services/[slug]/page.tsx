import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { services, getService } from '@/lib/services'
import { site } from '@/lib/site'
import { Sq } from '@/components/Icons'

export const dynamicParams = false
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}
  return {
    title: `${s.nav} in Leicestershire`,
    description: `${s.short} Free survey, fixed written quote, 24-hour call-out across Leicester and Leicestershire.`,
    alternates: { canonical: `/services/${s.slug}` },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()

  const others = services.filter((o) => o.slug !== s.slug)
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="band svc-hero">
        <Image src={`/images/${s.img}.webp`} alt="" fill priority sizes="100vw" />
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span>{' '}
            <Link href="/services">Services</Link> <span>/</span> <b>{s.nav}</b>
          </nav>
          <h1>{s.h1}</h1>
          <p>{s.lede}</p>
          <div className="svc-hero-cta">
            <Link className="btn btn--orange" href="/#quote"><Sq />Get a free estimate</Link>
            <a className="btn btn--white" href={site.phoneHref}><Sq />Call {site.phone}</a>
          </div>
        </div>
      </section>

      <section className="band pad">
        <div className="wrap svc-grid">
          <div className="svc-main">
            <p className="svc-intro">{s.intro}</p>
            {s.blocks.map((b) => (
              <div key={b.h}>
                <h3>{b.h}</h3>
                <div dangerouslySetInnerHTML={{ __html: b.html }} />
              </div>
            ))}

            <h3>Frequently asked</h3>
            <div className="faq-list">
              {s.faq.map((f) => (
                <details className="faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="svc-aside">
            <div className="svc-box">
              <h2>Signs you need this</h2>
              <ul className="ticks">{s.signs.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="svc-box">
              <h2>At a glance</h2>
              <table className="doc-table">
                <tbody>
                  {s.spec.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
                </tbody>
              </table>
            </div>
            <div className="svc-box svc-box--cta">
              <h2>Free survey</h2>
              <p>No obligation, no deposit, and a fixed written quote. We answer 24 hours a day.</p>
              <Link className="btn btn--orange" href="/#quote"><Sq />Request a survey</Link>
              <a className="svc-tel" href={site.phoneHref}>{site.phone}</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="band band--surface pad">
        <div className="wrap">
          <div className="sec-head">
            <Link className="tagpill" href="/services">More from us</Link>
            <h2>Our other roofing services</h2>
          </div>
          <div className="rel-grid">
            {others.map((o) => (
              <Link className="rel-card" href={`/services/${o.slug}`} key={o.slug}>
                <span>{o.nav}</span><small>{o.short}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

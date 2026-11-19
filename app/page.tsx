import Image from 'next/image'
import Link from 'next/link'
import { site, towns, marqueeItems, steps, whyCards, projects, posts } from '@/lib/site'
import { services } from '@/lib/services'
import EnquiryForm from '@/components/EnquiryForm'
import ServiceAreaMap from '@/components/ServiceAreaMap'
import Reveal from '@/components/Reveal'
import Reviews from '@/components/Reviews'
import { Chevron, Star, Pin, Sq } from '@/components/Icons'

const img = (n: string) => `/images/${n}.webp`

const Asterisk = () => (
  <i aria-hidden="true">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2.6" strokeLinecap="round">
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
    </svg>
  </i>
)

const Marquee = ({ tone }: { tone: 'navy' | 'orange' }) => {
  const run = [...marqueeItems, ...marqueeItems]
  return (
    <div className={`mq mq--${tone}`} aria-hidden="true">
      <div className="mq-track">
        {run.map((t, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span>{t}</span>
            <Asterisk />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const cards = services.slice(0, 4)

  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section className="hero">
        <Image className="hero-photo" src={img('hero')} alt="" fill priority sizes="100vw" />
        <div className="hero-veil" />
        <div className="hero-rules">
          <i style={{ left: '22%' }} /><i style={{ left: '46%' }} /><i style={{ left: '71%' }} />
        </div>

        <div className="wrap">
          <div className="hero-copy">
            <Link className="locpill" href="#areas">
              <b>NEW</b> Leicester &amp; Leicestershire Expert Roofing <span>&rsaquo;</span>
            </Link>
            <h1>{site.tagline}</h1>
            <p className="hero-sub">
              Proudly serving Leicester, Loughborough &amp; across Leicestershire with expert roof
              repairs, re-roofing, flat roofing, guttering, leadwork &amp; 24/7 storm damage response.
            </p>
            <div className="hero-cta">
              <Link className="btn btn--orange" href="#quote"><Sq />Get a Free Estimate</Link>
            </div>
          </div>

          <aside className="proof">
            <div className="avatars">
              <span style={{ background: '#335796' }}>JW</span>
              <span style={{ background: '#5A7FBF' }}>RK</span>
              <span style={{ background: '#2A4B8D' }}>HP</span>
              <span style={{ background: '#7C91B5' }}>AS</span>
              <span className="more">+</span>
            </div>
            <p>Happy clients love our roofing services</p>
            <div className="proof-rating"><Star />&nbsp;<span>Reviewed on Google</span></div>
          </aside>
        </div>
      </section>

      {/* ------------------------------------------------- request a service */}
      <section className="reqbar" id="quote">
        <div className="wrap">
          <div className="reqcard">
            <div className="reqcard-head">Request a Service</div>
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- about */}
      <Reveal>
        <section className="band about pad" id="about">
          <svg className="about-bg" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g fill="none" stroke="var(--line)" strokeWidth="2" opacity=".35">
              <path d="M470 760 L760 452 L1050 760" />
              <path d="M556 760 L760 544 L964 760" />
              <path d="M1010 700 L1230 468 L1450 700" />
            </g>
          </svg>

          <div className="wrap about-grid">
            <figure className="about-shot">
              <Image src={img('about')} alt="A newly built two-storey home with a clean tiled roof"
                     fill sizes="(max-width:700px) 92vw, 30vw" />
              <span className="about-arc" />
            </figure>

            <div className="about-copy">
              <Link className="tagpill" href="#why">About Us <Chevron /></Link>
              <h2>The Alvari way &mdash; &ldquo;fix the cause, not the symptom&rdquo;</h2>
              <p>
                We are on Leicestershire roofs every day of the week. A leak gets traced back to what
                is actually causing it &mdash; a failed valley, porous mortar, a slipped slate &mdash;
                before anyone quotes you for a roof you may not need.
              </p>
              <p>
                Every job is surveyed properly and priced in writing before a single tile moves. No
                deposits, no day-rate surprises, and no subcontracted strangers on your scaffold.
              </p>
              <Link className="btn btn--orange" href="#why"><Sq />More About Us</Link>
            </div>

            <aside className="statcard">
              <h3>Roofing you can count on</h3>
              <ul>
                <li><b>24<em>/7</em></b><span>We answer, day or night</span></li>
                <li><b>&pound;0<em /></b><span>Deposit before work starts</span></li>
                <li><b>100<em>%</em></b><span>Work guaranteed in writing</span></li>
              </ul>
            </aside>
          </div>
        </section>
      </Reveal>

      <Marquee tone="navy" />
      <Marquee tone="orange" />

      {/* ------------------------------------------------------- services */}
      <section className="band svcs" id="services">
        <div className="svcs-grid">
          <div className="svcs-main">
            <Link className="tagpill" href="/services">Our Roofing Services <Chevron /></Link>
            <h2>Complete roofing solutions for every need</h2>

            <div className="svc-cards">
              {cards.map((s, i) => (
                <article className="svccard" key={s.slug}>
                  <div className="svccard-media">
                    <Image src={img(s.img)} alt="" fill sizes="(max-width:620px) 92vw, 30vw" />
                  </div>
                  <div className="svccard-body">
                    <h3>{s.nav}</h3>
                    <p>{s.short}</p>
                  </div>
                  <Link className={`btn ${i === 0 ? 'btn--orange' : 'btn--navy'}`}
                        href={`/services/${s.slug}`}><Sq />View Service</Link>
                </article>
              ))}
            </div>

            <p className="svcs-foot">
              Guttering, fascias, chimney work and hand-dressed leadwork too.{' '}
              <Link href="/services">View all services</Link>
            </p>
          </div>

          <div className="svcs-photo">
            <Image src={img('svc-tall')} alt="Crisp new roof tiles catching the light"
                   fill sizes="(max-width:900px) 100vw, 40vw" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ emergency */}
      <div className="band emg">
        <div className="wrap">
          <div>
            <h3>Roof opened up overnight? We are on call.</h3>
            <p>Emergency make-safe and temporary covering across Leicestershire, 24 hours a day.
               We handle the insurance paperwork with you.</p>
          </div>
          <a className="btn" href={site.phoneHref}>Emergency line &middot; {site.phone}</a>
        </div>
      </div>

      {/* ---------------------------------------------------- why choose */}
      <Reveal>
        <section className="band whyc pad" id="why">
          <div className="wrap">
            <div className="whyc-top">
              <figure className="whyc-shot">
                <Image src={img('why')} alt="A freshly finished clay tile roof against a clear sky"
                       fill sizes="(max-width:860px) 92vw, 34vw" />
              </figure>
              <div>
                <Link className="tagpill tagpill--light" href="#about">Why Choose Us <Chevron /></Link>
                <h2>Why choose {site.name} Roofing?</h2>
                <p className="whyc-lead">
                  We are a Leicestershire roofing firm, not a national call centre with a local
                  number. Small repairs and full re-roofs get the same survey, the same written
                  quote and the same guarantee.
                </p>
              </div>
            </div>

            <div className="whyc-cards">
              {whyCards.map((c) => (
                <article className="whyc-card" key={c.title}>
                  <span className="whyc-ico">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={c.icon} />
                    </svg>
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* --------------------------------------------------------- process */}
      <Reveal>
        <section className="band proc pad" id="process">
          <div className="wrap">
            <div className="sec-head">
              <Link className="tagpill" href="#quote">Our Roofing Process <Chevron /></Link>
              <h2>A simple process from survey to sign-off</h2>
            </div>
            <div className="proc-grid">
              <div>
                <div className="steps2">
                  {steps.map((s, i) => (
                    <div className="step2" key={s.title}>
                      <b>{String(i + 1).padStart(2, '0')}</b>
                      <div><h3>{s.title}</h3><p>{s.body}</p></div>
                    </div>
                  ))}
                </div>
                <a className="btn btn--orange" href={site.phoneHref}><Sq />Call now: {site.phone}</a>
              </div>
              <figure className="proc-shot">
                <Image src={img('process')} alt="Scaffolding erected against a house for roof work"
                       fill sizes="(max-width:860px) 92vw, 45vw" />
                <span className="arc-ov" />
              </figure>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ----------------------------------------------------- recent work */}
      <Reveal>
        <section className="band band--surface pad" id="work">
          <div className="wrap">
            <div className="sec-head">
              <Link className="tagpill" href="#quote">Our Projects <Chevron /></Link>
              <h2>Our recent work</h2>
            </div>
            <div className="work2">
              {projects.map((p) => (
                <figure key={p.img} style={{ aspectRatio: p.ratio }}>
                  <Image src={img(p.img)} alt={p.caption.replace('—', '-')}
                         fill sizes="(max-width:540px) 92vw, (max-width:860px) 46vw, 30vw" />
                  <figcaption>{p.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ------------------------------------------------------- reviews */}
      <section className="band revs2 pad" id="reviews">
        <div className="wrap">
          <div className="revs2-head">
            <div>
              <Link className="tagpill tagpill--light" href="#quote">Testimonials <Chevron /></Link>
              <h2>What our customers say</h2>
            </div>
            <a className="btn btn--orange" href={site.googleProfile} target="_blank" rel="noopener noreferrer">
              <Sq />See more on Google
            </a>
          </div>

          <Reviews />
        </div>
      </section>

      {/* -------------------------------------------------- service areas */}
      <Reveal>
        <section className="band areas2 pad" id="areas">
          <div className="wrap">
            <div className="areas2-grid">
              <ServiceAreaMap />
              <div>
                <Link className="tagpill tagpill--light" href="#quote">Service Areas <Chevron /></Link>
                <h2>Leicestershire communities we serve</h2>
                <p className="areas2-sub">Communities we serve</p>
                <div className="towns2">
                  {towns.map((t) => (
                    <Link key={t.name} className={`town2${'featured' in t && t.featured ? ' is-on' : ''}`} href="#quote">
                      <Pin /><span>{t.name}</span>
                    </Link>
                  ))}
                </div>
                <Link className="btn btn--orange" href="#quote"><Sq />Don&rsquo;t see your town? Ask us</Link>
                <p className="map-note">
                  We cover roughly a 25-mile radius of Leicester.{' '}
                  <a href="https://www.openstreetmap.org/?mlat=52.6369&mlon=-1.1398#map=10/52.63/-1.13"
                     target="_blank" rel="noopener noreferrer">View larger map</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ----------------------------------------------------------- blog */}
      <Reveal>
        <section className="band blog pad" id="blog">
          <div className="wrap">
            <div className="sec-head">
              <Link className="tagpill" href="#blog">The Alvari Roofing Blog <Chevron /></Link>
              <h2>Roofing tips and homeowner advice</h2>
            </div>
            <div className="blog-grid">
              {posts.map((p) => (
                <Link className="post" href="#quote" key={p.title}>
                  <div className="post-shot">
                    <Image src={img(p.img)} alt="" fill sizes="(max-width:860px) 92vw, 30vw" />
                    <span className={`post-date${'featured' in p && p.featured ? ' is-on' : ''}`}>
                      {p.month}<br />{p.day}
                    </span>
                  </div>
                  <div className="post-body">
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                    <span className="more">Read more</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ------------------------------------------------------------ cta */}
      <section className="band cta pad" id="cta">
        <Image src={img('cta')} alt="" fill sizes="100vw" />
        <div className="wrap">
          <h2>Protect your home with a roof that lasts</h2>
          <p>
            Whether you need a small repair, a full re-roof, an emergency make-safe or just a
            straight answer about whether your roof has a problem at all, {site.name} is ready to help.
          </p>
          <div className="cta-btns">
            <Link className="btn btn--orange" href="#quote"><Sq />Get a free estimate</Link>
            <a className="btn btn--white" href={site.phoneHref}><Sq />Call {site.phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}

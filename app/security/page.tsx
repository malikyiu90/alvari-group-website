import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Security',
  description: 'How Alvari Group handles your details, and how to tell a genuine approach from a scam.',
  alternates: { canonical: '/security' },
}

const toc = [
            { id: 'scope', label: 'What this covers' },
            { id: 'enquiry', label: 'Your enquiry details' },
            { id: 'site', label: 'This website' },
            { id: 'pay', label: 'Payments' },
            { id: 'contact', label: 'How we will and will not contact you' },
            { id: 'report', label: 'Reporting a problem' },
]

const body = `      <div className="doc-note"><p><strong>Have this checked before you rely on it.</strong> It is written against current UK law for a roofing contractor, but it is not legal advice. Fill in every place marked <strong>to be confirmed</strong> and have a solicitor read it once.</p></div>
      <section id="scope">
        <h2>What this covers</h2>
        <p>This page explains in plain terms how we look after what you tell us, and what to watch out for. It
        sits alongside the <a href="privacy.html">privacy notice</a>, which covers your legal rights over that information.</p>
      </section>
      <section id="enquiry">
        <h2>Your enquiry details</h2>
        <ul>
          <li>Enquiries reach a mailbox only Alvari Group staff can open.</li>
          <li>Survey photographs and notes are kept on company devices, passcode-locked, not on personal phones.</li>
          <li>Access is limited to the people who need it to quote, do the job or invoice for it.</li>
          <li>We do not sell your details and we do not pass them to lead-generation companies.</li>
        </ul>
        <div className="doc-note"><p>Confirm each of these is actually true before publishing. If enquiries currently
        land on a personal phone, either change that or change this page.</p></div>
      </section>
      <section id="site">
        <h2>This website</h2>
        <ul>
          <li>Served over <strong>HTTPS</strong>, so what you type is encrypted in transit.</li>
          <li>No advertising, no tracking pixels, no analytics cookies.</li>
          <li>The enquiry form asks only for a name, phone, email and postcode.</li>
          <li>Hosting and certificate provider: <strong>to be confirmed</strong>.</li>
        </ul>
      </section>
      <section id="pay">
        <h2>Payments</h2>
        <p><strong>We never take card details through this website, by email, or in a phone message.</strong>
        There is no payment page here. Payment is arranged with you on completion, by the method set out in your quote.</p>
        <p>If anyone asks you to pay Alvari Group by card over the phone, in cryptocurrency, or into an account you
        have not seen on one of our invoices &mdash; stop, and call us on 07483&nbsp;172469.</p>
      </section>
      <section id="contact">
        <h2>How we will and will not contact you</h2>
        <p>Roofing has a known doorstep-fraud problem, so it is worth being blunt.</p>
        <h3>We will</h3>
        <ul>
          <li>reply to an enquiry you actually sent us;</li>
          <li>turn up at a time you agreed, and show you who we are;</li>
          <li>give you a written, itemised quote before any work starts.</li>
        </ul>
        <h3>We will not</h3>
        <ul>
          <li>knock on your door uninvited to say we have spotted something wrong with your roof;</li>
          <li>ask for cash up front, or press you to decide on the spot;</li>
          <li>ask for your bank details by email or text;</li>
          <li>change our bank details by email. If you get a message saying we have, do not pay it &mdash; ring the
          number above first. That scam is common in this trade.</li>
        </ul>
      </section>
      <section id="report">
        <h2>Reporting a problem</h2>
        <p>If you think someone is using our name, or you have found a security problem with this website, tell
        us at Alvari Group, 07483&nbsp;172469, <a href="mailto:hello@alvarigroup.co.uk">hello@alvarigroup.co.uk</a> and we will look into it.</p>
        <p>Suspected fraud can also be reported to Action Fraud on 0300 123 2040 or at
        <a href="https://www.actionfraud.police.uk/" target="_blank" rel="noopener">actionfraud.police.uk</a>.</p>
      </section>
`

export default function Page() {
  return (
    <>
      <section className="band doc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <b>Security</b>
          </nav>
          <h1>Security</h1>
          <p>How we look after what you tell us, how we will and will not contact you, and what to do if something looks wrong.</p>
          <div className="doc-meta">
            <span>Last updated <b>20 November 2026</b></span>
            <span>Applies to <b>alvarigroup.co.uk</b></span>
          </div>
        </div>
      </section>

      <section className="band pad">
        <div className="wrap doc-wrap">
          <nav className="doc-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              {toc.map((t) => (
                <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>
              ))}
            </ol>
          </nav>
          <div className="doc-body" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </section>
    </>
  )
}

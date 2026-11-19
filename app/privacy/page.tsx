import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy notice',
  description: 'How Alvari Group collects, uses and protects your personal information under UK GDPR.',
  alternates: { canonical: '/privacy' },
}

const toc = [
            { id: 'who', label: 'Who we are' },
            { id: 'collect', label: 'What we collect' },
            { id: 'why', label: 'Why, and our lawful basis' },
            { id: 'keep', label: 'How long we keep it' },
            { id: 'share', label: 'Who we share it with' },
            { id: 'cookies', label: 'Cookies and the map' },
            { id: 'rights', label: 'Your rights' },
            { id: 'complain', label: 'Complaints' },
            { id: 'changes', label: 'Changes' },
]

const body = `      <div className="doc-note"><p><strong>Have this checked before you rely on it.</strong> It is written against current UK law for a roofing contractor, but it is not legal advice. Fill in every place marked <strong>to be confirmed</strong> and have a solicitor read it once.</p></div>
      <section id="who">
        <h2>Who we are</h2>
        <p>Alvari Group is a roofing contractor working across Leicestershire. When you contact us or
        use this website, we are the <strong>data controller</strong> for the personal information you give us.</p>
        <p>Registered address: <strong>to be confirmed</strong>. Company number: <strong>to be confirmed</strong>.
        ICO registration: <strong>to be confirmed</strong>.</p>
        <p>You can reach us about anything on this page at Alvari Group, 07483&nbsp;172469, <a href="mailto:hello@alvarigroup.co.uk">hello@alvarigroup.co.uk</a>.</p>
      </section>
      <section id="collect">
        <h2>What we collect</h2>
        <p>We ask only for what we need to quote and carry out roofing work.</p>
        <div className="doc-scroll"><table className="doc-table">
          <tr><th>What</th><th>When</th><th>Why we need it</th></tr>
          <tr><td>Name, phone, email, postcode</td><td>Enquiry form or phone call</td><td>To reply, check we cover your area, arrange a survey</td></tr>
          <tr><td>What the job is</td><td>Enquiry form</td><td>To judge whether it needs a survey at all</td></tr>
          <tr><td>Address, survey notes, roof photographs</td><td>At survey and during the work</td><td>To quote accurately and record what we found and did</td></tr>
          <tr><td>Invoices and payment records</td><td>On completion</td><td>To take payment and meet tax and accounting duties</td></tr>
          <tr><td>Insurer correspondence</td><td>Storm and insurance work only</td><td>To support your claim, with your agreement</td></tr>
        </table></div>
        <p>We do not take card details through this website and we do not collect special category data.</p>
      </section>
      <section id="why">
        <h2>Why, and our lawful basis</h2>
        <p>Under UK GDPR we have to tell you which basis we rely on:</p>
        <ul>
          <li><strong>Steps before a contract</strong> &mdash; replying to your enquiry, surveying, quoting.</li>
          <li><strong>Performing a contract</strong> &mdash; doing the work you booked and invoicing for it.</li>
          <li><strong>Legal obligation</strong> &mdash; records HMRC requires, and any Building Control notification a job needs.</li>
          <li><strong>Legitimate interests</strong> &mdash; keeping a record of jobs so a guarantee claim can be checked years
          later, and defending a dispute. We have weighed that against your privacy and kept only what it needs.</li>
        </ul>
        <p>We do not send marketing unless you ask for it, and you can stop it at any time.</p>
      </section>
      <section id="keep">
        <h2>How long we keep it</h2>
        <div className="doc-scroll"><table className="doc-table">
          <tr><th>Record</th><th>Kept for</th><th>Reason</th></tr>
          <tr><td>Enquiry that did not become a job</td><td>12 months</td><td>In case you come back to us</td></tr>
          <tr><td>Survey notes and photographs</td><td>Guarantee period, plus 1 year</td><td>To check a guarantee claim against what was done</td></tr>
          <tr><td>Contracts and invoices</td><td>6 years</td><td>Limitation Act 1980 and HMRC</td></tr>
        </table></div>
        <p>When a period ends we delete the record or strip anything that identifies you.</p>
      </section>
      <section id="share">
        <h2>Who we share it with</h2>
        <p>We do not sell your data and we do not pass it to lead-generation or marketing lists. We share it only with:</p>
        <ul>
          <li>our accountant and our insurer, where a job or claim requires it;</li>
          <li>a scaffolding firm or specialist subcontractor &mdash; limited to the address and access details they need;</li>
          <li>your insurer or loss adjuster on storm work, with your agreement;</li>
          <li>Building Control, where the work has to be notified;</li>
          <li>a regulator or a court, where the law requires it.</li>
        </ul>
        <p>Records are held in the UK or the EEA. If that changes we will say so here and put the required safeguards in place first.</p>
      </section>
      <section id="cookies">
        <h2>Cookies and the map</h2>
        <p>This website sets <strong>no advertising or analytics cookies</strong>. There is no tracking pixel
        and no third-party advertising on it.</p>
        <p>The coverage map is embedded from <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>.
        When it loads, your browser contacts their servers directly and they see your IP address, as they would on any site.
        We receive nothing from it. Fonts load from Google Fonts the same way.</p>
        <div className="doc-note"><p>If you later add Google Analytics, a Meta pixel, a chat widget or call tracking,
        this section stops being true and you will need a cookie consent banner under PECR. Update this page the same
        day you add the tag, not afterwards.</p></div>
      </section>
      <section id="rights">
        <h2>Your rights</h2>
        <p>You can ask us to:</p>
        <ul>
          <li>give you a copy of what we hold about you;</li>
          <li>correct anything that is wrong;</li>
          <li>delete it, where we do not need it for a contract, a guarantee or the law;</li>
          <li>restrict or object to how we use it;</li>
          <li>send it to you, or to someone else, in a portable format.</li>
        </ul>
        <p>Write to Alvari Group, 07483&nbsp;172469, <a href="mailto:hello@alvarigroup.co.uk">hello@alvarigroup.co.uk</a>. We answer within one month and we do not charge for it.</p>
      </section>
      <section id="complain">
        <h2>Complaints</h2>
        <p>If you are unhappy with how we have handled your information, tell us first and we will try to
        put it right. You can also complain to the Information Commissioner's Office:</p>
        <p><a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener">ico.org.uk/make-a-complaint</a>
        &middot; 0303 123 1113 &middot; Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF.</p>
      </section>
      <section id="changes">
        <h2>Changes to this notice</h2>
        <p>If we change how we handle your information we will update this page and change the date at the top.</p>
      </section>
`

export default function Page() {
  return (
    <>
      <section className="band doc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <b>Privacy notice</b>
          </nav>
          <h1>Privacy notice</h1>
          <p>What we collect when you contact us about a roof, why we hold it, how long for, and the rights you have over it.</p>
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

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & conditions',
  description: 'The terms Alvari Group works to: quotes, your right to cancel, payment, guarantees and liability.',
  alternates: { canonical: '/terms' },
}

const toc = [
            { id: 'scope', label: 'These terms' },
            { id: 'quotes', label: 'Quotes and prices' },
            { id: 'cancel', label: 'Your right to cancel' },
            { id: 'pay', label: 'Payment' },
            { id: 'access', label: 'Access and the site' },
            { id: 'variations', label: 'Changes on site' },
            { id: 'guarantee', label: 'Our guarantee' },
            { id: 'liability', label: 'Liability' },
            { id: 'complaints', label: 'Complaints' },
            { id: 'law', label: 'Governing law' },
]

const body = `      <div className="doc-note"><p><strong>Have this checked before you rely on it.</strong> It is written against current UK law for a roofing contractor, but it is not legal advice. Fill in every place marked <strong>to be confirmed</strong> and have a solicitor read it once.</p></div>
      <section id="scope">
        <h2>These terms</h2>
        <p>These apply when Alvari Group carries out roofing work for you. They sit alongside your written
        quote; where the two differ, the quote wins for that job.</p>
        <p>Nothing here removes your rights under the Consumer Rights Act 2015 or the Consumer Contracts
        (Information, Cancellation and Additional Charges) Regulations 2013.</p>
      </section>
      <section id="quotes">
        <h2>Quotes and prices</h2>
        <p>Surveys and quotes are free, with no obligation.</p>
        <ul>
          <li>Quotes are <strong>fixed and itemised</strong> &mdash; labour, materials, scaffolding, waste removal.</li>
          <li>A quote is valid for <strong>60 days</strong> from its date.</li>
          <li>Prices include VAT where VAT applies.</li>
          <li>A quote covers what the survey could see. If opening the roof reveals something that could not
          reasonably have been found first &mdash; rotten timbers, failed decking, asbestos &mdash; we stop, show you,
          and give you a written price before doing any of it. You are never charged for extra work you did not
          agree to in writing.</li>
        </ul>
      </section>
      <section id="cancel">
        <h2>Your right to cancel</h2>
        <p>If you agree the work at your home, or anywhere away from our business premises, you have a legal
        right to cancel within <strong>14 days</strong> without giving a reason. The period runs from the day you
        agree the contract.</p>
        <p>To cancel, tell us in any clear way &mdash; a call, an email or a letter all count &mdash; at Alvari Group, 07483&nbsp;172469, <a href="mailto:hello@alvarigroup.co.uk">hello@alvarigroup.co.uk</a>. A
        cancellation form comes with your quote, but you do not have to use it.</p>
        <h3>If you want us to start inside the 14 days</h3>
        <p>We will not begin before the 14 days are up unless you ask us to in writing. If you do ask and then
        cancel, you pay only for what we have already done, in proportion to the full price. Emergency make-safe
        work is usually in this category, because you need it now.</p>
        <h3>Refunds</h3>
        <p>We refund anything you have paid within 14 days of being told you are cancelling, by the method you paid.</p>
        <div className="doc-note"><p><strong>Get this section checked specifically.</strong> Failing to give a consumer
        the required cancellation notice makes the contract unenforceable and is a criminal offence for the trader.
        The wording here and the notice attached to your quotes should both be reviewed before you trade on them.</p></div>
      </section>
      <section id="pay">
        <h2>Payment</h2>
        <ul>
          <li><strong>No deposit</strong> on domestic work. Materials go on our account, not yours.</li>
          <li>Payment is due <strong>on completion</strong>, once you have seen the finished work, unless your
          quote sets out stages for a larger job.</li>
          <li>Accepted methods: <strong>to be confirmed</strong>.</li>
          <li>We may charge statutory interest on late payment under the Late Payment of Commercial Debts
          (Interest) Act 1998. That applies to business customers only, not consumers.</li>
        </ul>
      </section>
      <section id="access">
        <h2>Access and the site</h2>
        <p>So we can work safely and on time, please:</p>
        <ul>
          <li>give us access on the agreed days, and tell us anything we need to know &mdash; fragile roof lights,
          asbestos, overhead cables, a shared drive, pets;</li>
          <li>move cars and garden furniture from where the scaffold or skip is going;</li>
          <li>keep children and pets clear of the working area.</li>
        </ul>
        <p>Work at height is governed by the Work at Height Regulations 2005. If a site cannot be made safe we
        will stop and tell you why.</p>
        <p>We work in daylight and in weather that allows a sound job. Rain, ice and high wind delay roofing. We
        will keep you informed, and a weather delay is not a breach by either of us.</p>
      </section>
      <section id="variations">
        <h2>Changes once we are on site</h2>
        <p>Any change to the agreed work is priced in writing and agreed by you before we carry it out. Verbal
        extras are not charged for and not relied on by either side.</p>
      </section>
      <section id="guarantee">
        <h2>Our guarantee</h2>
        <p>Our workmanship is guaranteed in writing. The certificate issued on completion sets the length and
        terms for your job, and that document is the one that counts.</p>
        <p>Materials carry their manufacturer's guarantee, which we pass on to you.</p>
        <h3>What it does not cover</h3>
        <ul>
          <li>Storm, impact, fire, flood or other accidental damage after completion.</li>
          <li>Work altered, repaired or interfered with by someone else.</li>
          <li>A part of the roof we did not work on, or that we told you in writing needed attention and you
          chose not to have done.</li>
          <li>Movement or defects in the building structure itself.</li>
          <li>Blocked gutters or moss where the roof has not been maintained.</li>
        </ul>
        <p>Your rights under the Consumer Rights Act 2015 &mdash; that work is done with reasonable care and skill
        &mdash; are in addition to this guarantee, not instead of it.</p>
      </section>
      <section id="liability">
        <h2>Liability</h2>
        <p>We hold public liability insurance; the policy number is in the Certifications panel in the footer.
        We are responsible for loss or damage caused by our failure to use reasonable care and skill.</p>
        <p>We are not liable for losses that were not foreseeable when the contract was made, or for business
        losses where you are a consumer. We never limit liability for death or personal injury caused by our
        negligence, for fraud, or for anything else that cannot lawfully be limited.</p>
      </section>
      <section id="complaints">
        <h2>Complaints</h2>
        <p>Tell us first. Call 07483&nbsp;172469 and we will come and look &mdash; most things get resolved on the roof.</p>
        <p>If we cannot resolve it between us, you can take it to an alternative dispute resolution scheme
        &mdash; <strong>to be confirmed</strong> &mdash; or to the courts.</p>
      </section>
      <section id="law">
        <h2>Governing law</h2>
        <p>These terms are governed by the law of England and Wales, and the courts of England and Wales have
        jurisdiction.</p>
      </section>
`

export default function Page() {
  return (
    <>
      <section className="band doc-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <b>Terms & conditions</b>
          </nav>
          <h1>Terms & conditions</h1>
          <p>What a quote covers, your 14-day right to cancel, when you pay, and what the guarantee does and does not include.</p>
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

'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { reviews } from '@/lib/reviews'
import { site } from '@/lib/site'
import { Sq, Star } from './Icons'

const Stars = ({ n }: { n: number }) => (
  <div className="rev2-stars" role="img" aria-label={`${n} out of 5`}>
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={13} fill={i < n ? '#D93A14' : '#D4DBE4'} />
    ))}
  </div>
)

function Rail() {
  const rail = useRef<HTMLDivElement | null>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const sync = useCallback(() => {
    const el = rail.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2)
  }, [])

  useEffect(() => {
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [sync])

  const step = (dir: 1 | -1) => {
    const el = rail.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const by = card ? card.getBoundingClientRect().width + 20 : el.clientWidth
    el.scrollBy({ left: dir * by, behavior: 'smooth' })
  }

  const scrollable = reviews.length > 1

  return (
    <>
      <div
        className="revs2-rail"
        id="rev-rail"
        ref={rail}
        onScroll={sync}
        tabIndex={0}
        aria-label="Customer reviews, scrollable"
      >
        {reviews.map((r, i) => (
          <article className="rev2" key={`${r.name}-${i}`}>
            <div className="rev2-top">
              <span className="rev2-av" style={{ background: r.colour }}>{r.initials}</span>
              <span>
                <span className="rev2-name">{r.name}</span><br />
                <span className="rev2-loc">{r.place}</span>
              </span>
            </div>
            <Stars n={r.stars} />
            <p>{r.body}</p>
          </article>
        ))}
      </div>

      {scrollable && (
        <div className="revs2-nav">
          <button type="button" aria-label="Previous reviews" disabled={atStart}
                  style={{ opacity: atStart ? 0.4 : 1 }} onClick={() => step(-1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="2.6" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
          </button>
          <button type="button" className="is-next" aria-label="More reviews" disabled={atEnd}
                  style={{ opacity: atEnd ? 0.4 : 1 }} onClick={() => step(1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="2.6" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </>
  )
}

function Invite() {
  return (
    <div className="rev-invite">
      <Star size={40} fill="none" />
      <h3>We are just getting started on Google</h3>
      <p>
        {site.name} is a new listing, so there are no reviews here yet &mdash; and we would rather
        show you none than show you someone else&rsquo;s. If we have been on your roof, a review
        helps the next person in Leicestershire decide who to call.
      </p>
      <div className="rev-invite-cta">
        <a className="btn btn--orange" href={site.googleProfile} target="_blank" rel="noopener noreferrer">
          <Sq />Leave us a review
        </a>
        <Link className="btn btn--ghost" href="#quote"><Sq />Get a free estimate</Link>
      </div>
    </div>
  )
}

/** Renders the carousel as soon as lib/reviews.ts has a real entry; until then
 *  it shows an honest invitation rather than an empty shelf. */
export default function Reviews() {
  return reviews.length > 0 ? <Rail /> : <Invite />
}

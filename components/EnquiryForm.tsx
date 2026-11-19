'use client'

import { useState } from 'react'
import { Sq } from './Icons'

const jobs = ['Roof repair', 'Full re-roof', 'Flat roof', 'Guttering or fascias',
  'Chimney or leadwork', 'Emergency, storm damage']

export default function EnquiryForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [postcode, setPostcode] = useState('')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const need = ['name', 'phone', 'postcode'] as const
    if (need.some((k) => !String(f.get(k) ?? '').trim())) {
      setError('Please fill in your name, phone number and postcode.')
      return
    }
    setError('')
    setPostcode(String(f.get('postcode') ?? '').trim().toUpperCase())
    setSent(true)
  }

  return (
    <form className={`reqform${sent ? ' is-sent' : ''}`} id="req-form" onSubmit={onSubmit} noValidate>
      {!sent && (
        <>
          <div className="field reqfield">
            <label htmlFor="r-name">Full Name</label>
            <input id="r-name" name="name" type="text" placeholder="Your Name" autoComplete="name" />
          </div>
          <div className="field reqfield">
            <label htmlFor="r-phone">Phone Number</label>
            <input id="r-phone" name="phone" type="tel" placeholder="Your Number" autoComplete="tel" />
          </div>
          <div className="field reqfield">
            <label htmlFor="r-email">Email</label>
            <input id="r-email" name="email" type="email" placeholder="Your Email" autoComplete="email" />
          </div>
          <div className="field reqfield">
            <label htmlFor="r-postcode">Postcode</label>
            <input id="r-postcode" name="postcode" type="text" placeholder="LE2 1AA" autoComplete="postal-code" />
          </div>
          <div className="field reqfield">
            <label htmlFor="r-help">How Can We Help</label>
            <select id="r-help" name="help" defaultValue={jobs[0]}>
              {jobs.map((j) => <option key={j}>{j}</option>)}
            </select>
          </div>
          <button className="btn btn--orange" type="submit"><Sq />Submit</button>
          {error && <p className="reqform-error" role="alert">{error}</p>}
        </>
      )}

      {sent && (
        <p className="reqsent" role="status">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D93A14"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><path d="M8 12.5l2.5 2.5L16 9.5" />
          </svg>
          <span>
            Demo only &mdash; nothing was sent. On the live site this reaches your
            enquiry inbox as a survey request for {postcode}.
          </span>
        </p>
      )}
    </form>
  )
}

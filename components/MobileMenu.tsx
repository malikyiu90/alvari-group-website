'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { site, nav } from '@/lib/site'
import { Phone, Sq } from './Icons'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLElement | null>(null)
  const btnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      const t = e.target as Node
      if (!menuRef.current?.contains(t) && !btnRef.current?.contains(t)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus() }
    }
    const onResize = () => { if (window.innerWidth > 1100) setOpen(false) }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <>
      <button
        ref={btnRef}
        className="nav-burger"
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
      >
        {open ? (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        )}
      </button>

      <nav
        ref={menuRef as React.RefObject<HTMLElement>}
        className="mobile-menu"
        id="mobile-menu"
        aria-label="Main menu"
        hidden={!open}
      >
        {nav.mobile.map((l) => (
          <Link key={l.href + l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link className="btn btn--orange" href="/#quote" onClick={() => setOpen(false)}>
          <Sq />Get a free estimate
        </Link>
        <a className="mm-call" href={site.phoneHref}>
          <Phone size={15} /> Call {site.phone}
        </a>
      </nav>
    </>
  )
}

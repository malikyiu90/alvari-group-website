'use client'

import { useEffect, useRef, useState } from 'react'

/** Fades a section in the first time it scrolls into view. It starts visible
 *  and only hides once the observer is known to be running, so the page is
 *  complete at rest and with JS off. */
export default function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [armed, setArmed] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setArmed(true)
    const obs = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setShown(true); obs.disconnect() }
    }, { rootMargin: '0px 0px -8% 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const state = !armed ? 'is-shown' : shown ? 'is-shown' : 'is-hidden'
  return <div ref={ref} className={`reveal ${state} ${className}`.trim()}>{children}</div>
}

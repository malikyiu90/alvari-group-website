'use client'

import { useEffect, useRef, useState } from 'react'

const BBOX = '-1.62%2C52.38%2C-0.64%2C52.87'
const MARK = '52.6369%2C-1.1398'

const PINS: [string, number, number, boolean][] = [
  ['Leicester', 294, 238, true], ['Loughborough', 253, 100, false],
  ['Coalville', 154, 150, false], ['Melton Mowbray', 449, 106, false],
  ['Hinckley', 151, 336, false], ['Market Harborough', 428, 400, false],
  ['Lutterworth', 257, 423, false],
]

/** The OpenStreetMap embed is the map people should see. Some environments
 *  refuse third-party frames, so if it has not loaded once it is in view we
 *  fall back to a drawn map rather than leaving a grey hole. */
export default function ServiceAreaMap() {
  const box = useRef<HTMLDivElement | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const el = box.current
    if (!el) return
    let timer: ReturnType<typeof setTimeout>
    const arm = () => { timer = setTimeout(() => setFailed((f) => (loaded ? f : true)), 5000) }
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) { obs.disconnect(); arm() }
      }, { rootMargin: '300px' })
      obs.observe(el)
      return () => { obs.disconnect(); clearTimeout(timer) }
    }
    arm()
    return () => clearTimeout(timer)
  }, [loaded])

  return (
    <div className="areas2-map" ref={box}>
      {!failed ? (
        <iframe
          title="Map of the Leicestershire area Alvari Group covers"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${BBOX}&layer=mapnik&marker=${MARK}`}
        />
      ) : (
        <svg viewBox="0 0 600 500" role="img" aria-label="Map of the Leicestershire area Alvari Group covers">
          <rect width="600" height="500" fill="#D5E1EC" />
          <path d="M0 330 Q140 300 250 340 T600 320 L600 500 L0 500Z" fill="#C2DCBD" />
          <path d="M0 90 Q120 70 230 110 T600 80" fill="none" stroke="#B3C7D8" strokeWidth="26" />
          <g stroke="#FFFFFF" strokeWidth="7" fill="none" strokeLinecap="round">
            <path d="M60 420 L190 300 L330 280 L470 180 L560 120" />
            <path d="M120 120 L220 230 L300 420" />
            <path d="M330 280 L520 350" />
          </g>
          <path d="M70 200 Q200 250 290 200 T560 260" fill="none" stroke="#7FB2D6" strokeWidth="6" />
          <g fontFamily="Inter,sans-serif" fontWeight="600" fill="#1E3A55">
            {PINS.map(([name, x, y, main]) => (
              <g key={name}>
                <circle cx={x} cy={y} r={main ? 10 : 7} fill={main ? '#D93A14' : '#0B5FCB'} stroke="#fff" strokeWidth="2" />
                <text x={x + 15} y={y + 5} fontSize={main ? 15 : 13}>{name}</text>
              </g>
            ))}
          </g>
        </svg>
      )}
    </div>
  )
}

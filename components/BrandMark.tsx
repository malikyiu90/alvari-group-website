const A_PATH = 'M66 2 L131 97 L91 97 L66 27 L41 97 L1 97 Z'
const BAR = 'M47 58 L86 58 L90 77 L43 77 Z'

/** Each instance carries its own pattern ids: a pattern's currentColor
 *  resolves where the pattern is defined, so a shared one renders the
 *  footer mark navy-on-navy. */
export default function BrandMark({ uid, className, width, height }: {
  uid: string; className?: string; width: number; height: number
}) {
  return (
    <svg className={className} viewBox="0 0 132 100" width={width} height={height} fill="none" aria-hidden="true">
      <defs>
        <pattern id={`${uid}-s`} width="18" height="26" patternUnits="userSpaceOnUse">
          <rect x="1" y="1" width="16" height="11" rx="1.2" fill="currentColor" />
          <rect x="-8" y="14" width="16" height="11" rx="1.2" fill="currentColor" />
          <rect x="10" y="14" width="16" height="11" rx="1.2" fill="currentColor" />
        </pattern>
        <clipPath id={`${uid}-c`}><rect x="0" y="0" width="132" height="24" /></clipPath>
      </defs>
      <path d={A_PATH} fill={`url(#${uid}-s)`} />
      <path d={A_PATH} fill="currentColor" clipPath={`url(#${uid}-c)`} />
      <path d={BAR} fill="#D93A14" />
    </svg>
  )
}

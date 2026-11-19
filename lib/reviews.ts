export type Review = {
  /** Initials for the avatar circle, e.g. 'JW'. */
  initials: string
  /** Avatar background. Pick any of the palette blues below. */
  colour: string
  /** How the reviewer signs their Google review, e.g. 'J. Whitfield'. */
  name: string
  /** Town and outward postcode, e.g. 'Clarendon Park, LE2'. */
  place: string
  /** 1–5. */
  stars: number
  /** The review text, as the customer wrote it. */
  body: string
}

/** Palette for avatar circles — cycle through these. */
export const avatarColours = ['#335796', '#0B5FCB', '#2A4B8D', '#5A7FBF', '#1F3E78']

/**
 * REAL GOOGLE REVIEWS ONLY.
 *
 * Add one object per review, copied from the Google Business Profile. The
 * section renders the carousel as soon as there is at least one; until then it
 * shows an honest invitation to leave the first.
 *
 * Example of a filled-in entry:
 *
 *   {
 *     initials: 'JW',
 *     colour: avatarColours[0],
 *     name: 'J. Whitfield',
 *     place: 'Clarendon Park, LE2',
 *     stars: 5,
 *     body: 'Exactly what the customer wrote on Google.',
 *   },
 *
 * Do not invent entries. Publishing reviews that were not written by real
 * customers is unlawful in the UK under the Digital Markets, Competition and
 * Consumers Act 2024, and the liability sits with the business.
 */
export const reviews: Review[] = []

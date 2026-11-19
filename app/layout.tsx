import type { Metadata } from 'next'
import { Anton, Archivo, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { site } from '@/lib/site'
import './globals.css'

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--f-hero', display: 'swap' })
const archivo = Archivo({ weight: ['500', '600', '700', '800'], subsets: ['latin'], variable: '--f-display', display: 'swap' })
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--f-body', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Roofers in Leicester & Leicestershire | Alvari Group',
    template: '%s | Alvari Group',
  },
  description:
    'Roofers covering Leicester, Loughborough, Hinckley and the whole of Leicestershire. Repairs, re-roofing, flat roofs and leadwork. Free survey, fixed written quote, 24-hour emergency call-out.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: site.name,
    url: site.url,
  },
  icons: { icon: '/favicon.svg' },
}

const ld = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: site.name,
  url: site.url,
  telephone: site.phoneE164,
  priceRange: '££',
  address: { '@type': 'PostalAddress', addressRegion: 'Leicestershire', addressCountry: 'GB' },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Leicestershire' },
    ...['Leicester', 'Loughborough', 'Hinckley', 'Melton Mowbray', 'Market Harborough', 'Coalville']
      .map((name) => ({ '@type': 'City', name })),
  ],
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${anton.variable} ${archivo.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Mert | İstanbul Mimarlık ve Üç Boyutlu Görselleştirme Ofisi',
  description: 'Mert bünyesinde modern mimari tasarım, lüks iç mekan projeleri ve premium 3D render görselleştirme hizmetleri sunulmaktadır. İstanbul merkezli kreatif çözümler.',
  keywords: 'istanbul mimarlık ofisi, 3d render, mimari görselleştirme, iç mimarlık, mert mimarlık, 3d tasarım',
  authors: [{ name: 'Mert Studio' }],
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} dark bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

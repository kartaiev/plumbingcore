import type { Metadata } from 'next'
import './globals.css'
import { Noto_Sans, Big_Shoulders_Display } from 'next/font/google'

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ['latin'],
  variable: '--font-bigShouldersDisplay',
  display: 'swap',
})

const noto = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Plumbing Core',
  description: 'Plumbing core is the best plumbing company in Charlotte, NC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bigShouldersDisplay.variable}, ${noto.variable}`}>
        {children}
      </body>
    </html>
  )
}

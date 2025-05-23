import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

// Initialize Figtree font
const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-figtree',
})

export const metadata: Metadata = {
  title: 'M111 The Reunion',
  icons: {
    icon: '/logo-m111.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={figtree.className}>
      <body>{children}</body>
    </html>
  )
}
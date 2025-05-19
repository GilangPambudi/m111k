import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'M111 Family Reunion',
  icons: {
    icon: '/logo_m111.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digimatic Law',
  description: 'Law Management App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="business">
      <body>
        {children}
      </body>
    </html>
  )
}

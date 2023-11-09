import type { Metadata } from 'next'
import Header from './header'
import Footer from './footer'

export const metadata: Metadata = {
  title: 'Digimatic Law',
  description: 'Law Management App',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="business">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import Footer from './footer'
import Header from './header'

export const metadata: Metadata = {
  title: 'Digimatic Law',
  description: 'Law Management App',
}

export default function HomeLayout({
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

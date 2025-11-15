import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Katyani Media - Offline Marketing Agency',
  description: 'Katyani Media is a trusted offline marketing partner based in Hyderabad, delivering impactful street, society, and local campaigns across Telangana.',
  keywords: 'marketing agency, offline marketing, advertising, brand promotion, Hyderabad, Telangana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className="bg-white text-gray-900 antialiased" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }} suppressHydrationWarning>
        <div id="root-layout" className="flex flex-col min-h-screen w-full">
          <Header />
          <main className="flex-1 w-full relative pt-16 lg:pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}


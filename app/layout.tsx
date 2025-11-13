import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Katyani Media - Offline Marketing Agency',
  description: 'Professional offline marketing solutions for your business growth',
  keywords: 'marketing agency, offline marketing, advertising, brand promotion',
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
      </head>
      <body className={`${inter.className} bg-black text-primary-200 antialiased`} style={{ backgroundColor: '#000000', color: '#fde68a', margin: 0, padding: 0, minHeight: '100vh', width: '100%' }} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen bg-black w-full" style={{ backgroundColor: '#000000', minHeight: '100vh', width: '100%' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

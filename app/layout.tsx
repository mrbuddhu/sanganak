import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sanganak - Transform Your Ideas Into Reality',
  description: 'Expert solutions in Design, Web & Mobile Dev, Blockchain, AI, and SaaS.',
  metadataBase: new URL('https://sanganak.org'),
  openGraph: {
    title: 'Sanganak - Transform Your Ideas Into Reality',
    description: 'Expert solutions in Design, Web & Mobile Dev, Blockchain, AI, and SaaS.',
    url: 'https://sanganak.org',
    siteName: 'Sanganak',
    images: [
      {
        url: 'https://sanganak.org/api/og',
        width: 1200,
        height: 630,
        alt: 'Sanganak - Transform Your Ideas Into Reality'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanganak - Transform Your Ideas Into Reality',
    description: 'Expert solutions in Design, Web & Mobile Dev, Blockchain, AI, and SaaS.',
    images: ['https://sanganak.org/api/og'], // Using the same dynamic OG image
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


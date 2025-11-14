import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Funnel Effect - Listen. Learn. Level Up.',
  description: 'A tech podcast sharing insights, stories, and resources for developers and tech enthusiasts.',
  keywords: 'podcast, technology, programming, tech insights, developer stories',
  authors: [{ name: 'Tech Odio Podcast' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'The Funnel Effect - Listen. Learn. Level Up.',
    description: 'A tech podcast sharing insights, stories, and resources for developers and tech enthusiasts.',
    url: 'https://staging-podcast.vercel.app',
    siteName: 'The Funnel Effect',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Funnel Effect - Listen. Learn. Level Up.',
    description: 'A tech podcast sharing insights, stories, and resources for developers and tech enthusiasts.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        {children}
      </body>
    </html>
  )
}
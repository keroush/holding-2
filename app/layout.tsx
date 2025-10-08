import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Transform Your Life - Personal & Business Results Coach',
  description: 'Unlock your potential with proven strategies for personal growth, business success, and life transformation. Join millions who have achieved extraordinary results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import '../styles/globals.scss'


export const metadata: Metadata = {
  title: 'ln2rworks portofolio',
  description: 'List of works/stuff related to ln2rworks/ln2r',
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

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wodociągi',
  description: 'Witryna obrazująca stan wodociągów',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl-PL">
      <body className={inter.className}>
            {children}
      </body>
      
    </html>
  )
}

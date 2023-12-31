import './globals.css'
import type { Metadata } from 'next'
import { montserrat } from '@/src/assets/fonts/fonts'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Staking Spreadsheet',
  description: 'Excel on the web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-Montserrat`}>
        {children}
      </body>
    </html>
  )
}

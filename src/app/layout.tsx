import type { Metadata } from 'next'
import '../styles/globals.css'
import { fontSans, fontMono } from '@/styles/fonts'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'QuickSol',
  description: 'Solana Wallet Manager',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        {children}
      </body>
    </html>
  )
}

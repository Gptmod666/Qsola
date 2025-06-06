// src/app/layout.tsx
import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'QuickSol',
  description: 'Solana Wallet Manager',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}


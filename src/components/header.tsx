import React from 'react'

export default function Header() {
  // Dummy values will be replaced with real data later
  const totalWallets = 0
  const totalSol = 0

  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-lg font-bold">Qsola</h1>
      <div className="text-sm">
        <span className="mr-4">Wallets: {totalWallets}</span>
        <span>SOL: {totalSol}</span>
      </div>
    </header>
  )
}
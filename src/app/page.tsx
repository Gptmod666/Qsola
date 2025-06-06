"use client"

import { useState } from 'react'
import MainWallet from './mainwallet'
import Generator from './generator'
import Distributor from './distributor'
import Pump from './pump'

export default function Page() {
  const [tab, setTab] = useState('main')

  return (
    <main>
      <div className="flex border-b">
        <button 
          onClick={() => setTab('main')}
          className={`px-4 py-2 ${tab === 'main' ? 'border-b-2 border-blue-500' : ''}`}
        >
          Main Wallet
        </button>
        <button 
          onClick={() => setTab('generator')}
          className={`px-4 py-2 ${tab === 'generator' ? 'border-b-2 border-blue-500' : ''}`}
        >
          Generator
        </button>
        <button 
          onClick={() => setTab('distributor')}
          className={`px-4 py-2 ${tab === 'distributor' ? 'border-b-2 border-blue-500' : ''}`}
        >
          Distributor
        </button>
        <button 
          onClick={() => setTab('pump')}
          className={`px-4 py-2 ${tab === 'pump' ? 'border-b-2 border-blue-500' : ''}`}
        >
          Pump
        </button>
      </div>

      {tab === 'main' && <MainWallet />}
      {tab === 'generator' && <Generator />}
      {tab === 'distributor' && <Distributor />}
      {tab === 'pump' && <Pump />}
    </main>
  )
}
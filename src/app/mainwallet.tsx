"use client"

import { useEffect, useState, ChangeEvent } from 'react'
import { Keypair } from '@solana/web3.js'
import { generateWallet } from '@/services/wallet/generator.service'
import {
  loadMainWallet,
  saveMainWallet,
  deleteMainWallet,
} from '@/services/wallet/main-wallet.service'
import DeletePopup from './delete-popup'

export default function MainWallet() {
  const [wallet, setWallet] = useState<Keypair | null>(null)
  const [showDelete, setShowDelete] = useState(false)

  useEffect(() => {
    const loaded = loadMainWallet()
    if (loaded) setWallet(loaded)
  }, [])

  function handleGenerate() {
    const kp = generateWallet()
    saveMainWallet(kp)
    setWallet(kp)
  }

  function handleImport(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    file.text().then(text => {
      try {
        const secret = Uint8Array.from(JSON.parse(text))
        const kp = Keypair.fromSecretKey(secret)
        saveMainWallet(kp)
        setWallet(kp)
      } catch {
        alert('Invalid wallet file')
      }
    })
  }

  function handleExport() {
    if (!wallet) return
    const data = JSON.stringify(Array.from(wallet.secretKey))
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'mainwallet.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  function handleDelete() {
    deleteMainWallet()
    setWallet(null)
    setShowDelete(false)
  }

  return (
    <section className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Main Wallet</h1>
      <div className="space-x-2">
        <input type="file" accept="application/json" onChange={handleImport} />
        <button onClick={handleGenerate} className="px-4 py-2 bg-gray-200 rounded">Generate</button>
        <button onClick={handleExport} disabled={!wallet} className="px-4 py-2 bg-gray-200 rounded">Export</button>
      </div>
      {wallet && (
        <div className="space-y-2">
          <p className="break-all">Address: {wallet.publicKey.toBase58()}</p>
          <button
            onClick={() => setShowDelete(true)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete Wallet
          </button>
        </div>
      )}
      {showDelete && (
        <DeletePopup onConfirm={handleDelete} onCancel={() => setShowDelete(false)} />
      )}
    </section>
  )
}
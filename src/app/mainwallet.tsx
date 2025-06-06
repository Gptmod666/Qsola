"use client"

import { useEffect, useState, ChangeEvent } from 'react'
import { Keypair } from '@solana/web3.js'
import {
  loadMainWallet,
  saveMainWallet,
  deleteMainWallet,
} from '@/services/wallet/main-wallet.service'
import DeletePopup from './delete-popup'
import { Input, Button, Card, CardBody, CardHeader } from "@heroicons/react"

export default function MainWallet() {
  const [wallet, setWallet] = useState<Keypair | null>(null)
  const [showDelete, setShowDelete] = useState(false)
  const [secretKey, setSecretKey] = useState('')

  useEffect(() => {
    const loaded = loadMainWallet()
    if (loaded) setWallet(loaded)
  }, [])

  function handleImportFile(e: ChangeEvent<HTMLInputElement>) {
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

  function handleImportKey() {
    try {
      const secret = Uint8Array.from(JSON.parse(secretKey))
      const kp = Keypair.fromSecretKey(secret)
      saveMainWallet(kp)
      setWallet(kp)
      setSecretKey('')
    } catch {
      alert('Invalid secret key format')
    }
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
    <Card className="mt-4">
      <CardHeader>
        <h1 className="text-xl font-bold">Main Wallet</h1>
      </CardHeader>
      <CardBody className="space-y-4">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input 
              type="text" 
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              placeholder="Enter secret key array"
              size="sm"
              className="flex-1"
            />
            <Button 
              onClick={handleImportKey}
              isDisabled={!secretKey}
              color="primary"
              size="sm"
            >
              Import Key
            </Button>
          </div>
          <div className="flex gap-2">
            <Input 
              type="file" 
              accept="application/json" 
              onChange={handleImportFile} 
              size="sm"
              className="flex-1"
            />
            <Button 
              onClick={handleExport} 
              isDisabled={!wallet}
              color="secondary"
              size="sm"
            >
              Export
            </Button>
          </div>
        </div>
        {wallet && (
          <div className="space-y-2">
            <p className="break-all">Address: {wallet.publicKey.toBase58()}</p>
            <Button
              onClick={() => setShowDelete(true)}
              color="danger"
              size="sm"
            >
              Delete Wallet
            </Button>
          </div>
        )}
        {showDelete && (
          <DeletePopup onConfirm={handleDelete} onCancel={() => setShowDelete(false)} />
        )}
      </CardBody>
    </Card>
  )
}
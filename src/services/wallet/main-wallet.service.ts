import { Keypair } from '@solana/web3.js'

const KEY = 'main-wallet'

export function saveMainWallet(kp: Keypair) {
  localStorage.setItem(KEY, JSON.stringify(Array.from(kp.secretKey)))
}

export function loadMainWallet(): Keypair | null {
  const data = localStorage.getItem(KEY)
  if (!data) return null
  const secret = Uint8Array.from(JSON.parse(data))
  return Keypair.fromSecretKey(secret)
}

import { Keypair } from '@solana/web3.js'

export function generateWallet(): Keypair {
  return Keypair.generate()
}

export function walletToBase58(kp: Keypair): string {
  return `[${kp.secretKey.toString()}]`
}

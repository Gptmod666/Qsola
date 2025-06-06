import { Connection, clusterApiUrl, Keypair, SystemProgram, Transaction, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js'
import api from '../api.json'

let connection: Connection | null = null

export function getConnection(): Connection {
  if (!connection) {
    const endpoint = api.helius?.http || clusterApiUrl('mainnet-beta')
    connection = new Connection(endpoint, 'confirmed')
  }
  return connection
}

export async function sendSol(from: Keypair, to: string, amount: number) {
  const conn = getConnection()
  const tx = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: from.publicKey,
      toPubkey: new PublicKey(to),
      lamports: Math.round(amount * LAMPORTS_PER_SOL),
    })
  )
  const sig = await conn.sendTransaction(tx, [from])
  await conn.confirmTransaction(sig, 'confirmed')
  return sig
}

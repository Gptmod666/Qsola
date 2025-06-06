import api from '../api.json'

export interface SolPrice {
  usd: number
  usd_24h_change: number
}

export async function fetchSolPrice(): Promise<SolPrice> {
  const res = await fetch(api.gecko.solUsd)
  if (!res.ok) throw new Error('Failed to fetch price')
  const data = await res.json()
  return data.solana as SolPrice
}

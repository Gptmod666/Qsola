import api from '../api.json'

export interface PumpToken {
  id: string
  name: string
  symbol: string
  priceUsd: number
}

export async function fetchTrendingTokens(): Promise<PumpToken[]> {
  const res = await fetch(api.pumpfun.trending)
  if (!res.ok) throw new Error('Failed to fetch tokens')
  return await res.json()
}

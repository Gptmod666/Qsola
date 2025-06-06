"use client"

import { useEffect, useState } from 'react'
import { fetchTrendingTokens, PumpToken } from '@/services/pumpfun/trending.service'

export default function Pump() {
  const [tokens, setTokens] = useState<PumpToken[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchTrendingTokens()
      .then(setTokens)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="p-4">Loading...</p>
  if (error) return <p className="p-4 text-red-500">{error}</p>

  return (
    <section className="p-4">
      <h1 className="mb-4 text-xl font-bold">Trending Tokens</h1>
      <ul className="space-y-2">
        {tokens.map(token => (
          <li key={token.id} className="flex justify-between border rounded p-2">
            <span>{token.name} ({token.symbol})</span>
            <span>${token.priceUsd.toFixed(4)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

import api from '../api.json'

export async function heliusRequest<T = any>(path: string, opts?: RequestInit): Promise<T> {
  const url = `${api.helius.http}${path}`
  const res = await fetch(url, opts)
  if (!res.ok) throw new Error(`Helius error: ${res.status}`)
  return res.json() as Promise<T>
}

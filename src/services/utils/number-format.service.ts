export function formatSol(amount: number): string {
  return `${amount.toFixed(2)} SOL`
}

export function formatUsd(amount: number): string {
  return `$${amount.toFixed(2)}`
}

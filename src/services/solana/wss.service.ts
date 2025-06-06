import api from '../api.json'

let ws: WebSocket | null = null

export function getWebSocket(): WebSocket {
  if (!ws) {
    ws = new WebSocket(api.helius.ws)
  }
  return ws
}

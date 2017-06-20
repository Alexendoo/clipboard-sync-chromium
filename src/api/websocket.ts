interface PromiseExecutor<T> {
  reject(reason: any): void
  resolve(value: T): void
}

export class WebSocketStream {
  private ws: WebSocket
  private listeners: PromiseExecutor<Uint8Array>[] = []
  private buffer: Uint8Array[] = []
  private err?: Event

  public open: Promise<Event>

  constructor(url: string) {
    this.ws = new WebSocket(url)
    this.ws.binaryType = 'arraybuffer'

    this.ws.addEventListener('message', this.onmessage.bind(this))
    this.ws.addEventListener('error', this.onerror.bind(this))

    this.open = new Promise<Event>((resolve, reject) => {
      this.ws.addEventListener('open', resolve)
      this.ws.addEventListener('error', reject)
    })
  }

  private onerror(e: Event) {
    this.err = e
    for (const listener of this.listeners) {
      listener.reject(e)
    }
  }

  private onmessage(e: MessageEvent) {
    const bytes = new Uint8Array(e.data)

    if (this.listeners.length === 0) {
      this.buffer.push(bytes)
      return
    }

    const target = this.listeners.shift()!
    target.resolve(bytes)
  }

  read() {
    if (this.err !== undefined) {
      return Promise.reject(this.err)
    }

    if (this.buffer.length > 0) {
      return Promise.resolve(this.buffer.shift()!)
    }

    return new Promise<Uint8Array>((resolve, reject) => {
      this.listeners.push({
        resolve,
        reject,
      })
    })
  }

  send(data: BufferSource) {
    this.ws.send(data)
  }

  close() {
    this.ws.close()
  }
}

window.WebSocketStream = WebSocketStream

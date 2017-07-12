import { Resolvable } from '../util/async'
import * as Message from './interface'

class CryptoQueue {
  private worker: Worker = new Worker('crypto_worker.js')
  private queue: Array<Resolvable<any>> = []

  // private map = new Map<number, Resolvable<any>>()

  private pull(event: MessageEvent) {
    const response: Message.Response = event.data
    const resolvable = this.queue.shift()

    if (resolvable === undefined) {
      throw new TypeError('resolvable is undefined')
    }

    if (response.success) {
      resolvable.resolve(response.value)
    } else {
      resolvable.reject(response.value)
    }
  }

  constructor() {
    this.pull = this.pull.bind(this)
    this.worker.addEventListener('message', this.pull)
  }

  push(operation: Message.Request): Promise<any> {
    const resolvable = new Resolvable<any>()
    this.queue.push(resolvable)
    this.worker.postMessage(operation)
    return resolvable.promise
  }
}

const dispatcher = new CryptoQueue()

export function verify() {
  return dispatcher.push({
    operation: Message.Operation.verfify,
    value: arguments,
  })
}

window.d = dispatcher

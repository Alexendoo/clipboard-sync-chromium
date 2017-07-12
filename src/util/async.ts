export class Resolvable<T> {
  resolve: (value?: T | PromiseLike<T>) => void
  reject: (reason?: any) => void
  promise: Promise<T>

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
}

addEventListener('message', event => {
  const success: boolean = true
  postMessage({
    success,
    value: event.data,
  })
})

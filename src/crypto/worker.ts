addEventListener('message', event => {
  postMessage({
    success: true,
    value: event.data,
  })
})

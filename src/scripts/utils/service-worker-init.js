import runtime from 'serviceworker-webpack-plugin/lib/runtime'

const serviceWorkerInit = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register()
    return
  }

  console.log('Service worker not supported in this browser')
}

export default serviceWorkerInit

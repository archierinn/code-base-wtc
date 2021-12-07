import 'regenerator-runtime'
import CacheUtility from './utils/cache-utility'

const { assets } = global.serviceWorkerOption

self.addEventListener('install', (event) => {
  event.waitUntil(CacheUtility.cachingAppShell([...assets, './']))
})
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheUtility.deleteOldCache())
})
self.addEventListener('fetch', (event) => {
  event.respondWith(CacheUtility.revalidateCache(event.request))
})

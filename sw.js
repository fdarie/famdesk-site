// FamDesk Helper — Service Worker (Phase 86)
const CACHE = 'famdesk-helper-v2.0.4'
const ASSETS = [
  './helper.html',
  './style.css',
  './jsqr.min.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS.filter(a => {
        // Only cache assets that actually exist; skip missing files gracefully
        return true
      })))
      .catch(err => {
        // Cache what we can — don't fail install if optional assets are missing
        console.warn('[SW] Some assets not cached:', err)
        return caches.open(CACHE).then(c => c.addAll(['./helper.html', './manifest.json']))
      })
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', e => {
  // Pass WebSocket and cross-origin requests straight through (no caching)
  const url = e.request.url
  if (url.startsWith('ws://') || url.startsWith('wss://') ||
      !url.startsWith(self.location.origin)) return
  // Cache-first for static assets
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  )
})

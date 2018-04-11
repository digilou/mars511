// Build, activate, fetch cache

const cacheName = 'mars511-cache-v1',
      filesToCache = [
        '/',
        '../index.html',
        '../offline.html',
        '../src/css/main.min.css'
      ];

// first install cache of application shell
self.addEventListener('install', e => {
  console.log("Installing service worker...", e);
  e.waitUntil(
    caches.open(cacheName).
    then(cache => {
      return cache.addAll(filesToCache);
    }).then(() => {
      return self.skipWaiting();
    })
  )
});

// activate cache, remove outdated caches
self.addEventListener('activate', e => {
  console.log("Activating serive worker...", e);
  e.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if(key !== cacheName) return caches.delete(key);
      }))
    })
  )
  return self.clients.claim();
});

// fetch cache, with network and generic fallbacks
self.addEventListener('fetch', e => {
  event.respondWith(
    caches.match(e.request)
    .then(response => {
      return response || fetch(e.request);
    })
    .catch(() => caches.match('/offline.html'))
  )
});
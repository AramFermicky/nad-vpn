const CACHE_NAME = 'nad-vpn-v2';
const urlsToCache = [
  '/nad-vpn/',
  '/nad-vpn/index.html',
  '/nad-vpn/manifest.json',
  '/nad-vpn/icons/icon-192.png',
  '/nad-vpn/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
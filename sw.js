const CACHE_NAME = 'rider-report-v1';
const ASSETS = [
  '/RiderWayReport/',
  '/RiderWayReport/index.html',
  '/RiderWayReport/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

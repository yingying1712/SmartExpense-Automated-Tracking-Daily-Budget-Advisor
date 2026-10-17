// Minimal service worker for cat-ching PWA installation.
// This enables service-worker registration; it does not promise full offline support.
self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

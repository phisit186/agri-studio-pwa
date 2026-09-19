const CACHE_NAME = 'studio-pwa-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // ให้ข้อมูลโหลดสดจากเครือข่ายเสมอเพื่อความเรียลไทม์
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
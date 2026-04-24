const cacheName = 'android-v2';

self.addEventListener('install', (e) => {
    console.log('pwa для андроида запущено! 🚀');
});

self.addEventListener('fetch', (e) => {
    // просто пропускаем запросы к облаку
    e.respondWith(fetch(e.request));
});

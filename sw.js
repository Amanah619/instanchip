// Nama cache (Ganti versinya kalau mau reset cache user nanti)
const CACHE_NAME = 'zaptop-img-cache-v1';

// Saat Service Worker diinstall
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Saat Service Worker aktif, hapus cache lama jika ada update versi
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// INI BAGIAN PENTINGNYA (Intercept Network Request)
self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);

    // Kita hanya mau cache GAMBAR (jpg, png, webp, jpeg)
    if (requestUrl.pathname.match(/\.(jpg|jpeg|png|webp|gif)$/)) {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    // 1. Cek apakah gambar ada di Cache HP User?
                    if (cachedResponse) {
                        // Kalau ada, AMBIL DARI HP (Ngebut & Hemat Kuota)
                        return cachedResponse;
                    }

                    // 2. Kalau gak ada, baru download dari Internet
                    return fetch(event.request).then((networkResponse) => {
                        // Simpan hasil download ke Cache HP buat nanti
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
    } else {
        // Untuk file lain (HTML/JS/API), biarkan normal (online)
        // atau kamu bisa atur strategi lain di sini
        return; 
    }
});

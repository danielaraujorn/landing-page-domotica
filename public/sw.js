if ('serviceWorker' in navigator) {
 navigator.serviceWorker
 .register('sw.js')
 .then(function(registration) {
   console.log('SW registrado');
 }).catch(function(error) {
   console.log('Service worker registration failed, error:', error);
 });
}

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
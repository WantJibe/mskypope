// extremely simple service worker

const version = 2;

self.addEventListener('install', function(event) {
	event.waitUntil(caches.open('msky-pope-v2').then(function(cache) {
		return cache.addAll([
			'pope.html',
			'pope.html?bean',
			'logo.svg',
			'logo-192.png',
			'logo-512.png',
			'media/pope1.mp3',
			'media/pope1.ogg',
			'media/pope2.mp3',
			'media/pope2.ogg',
			'media/down.mp3',
			'media/down.ogg',
			'media/up.mp3',
			'media/up.ogg',
			'beanskull.png',
			'honk.mp3',
			'honk.ogg',
			'pope-manifest.json'
		]);
	}));
});

self.addEventListener('fetch', function(event) {
	event.respondWith(caches.match(event.request).then(function(response) {
		return response || fetch(event.request);
	}));
});

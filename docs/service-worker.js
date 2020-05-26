importScripts('workbox-sw.js');

var PROJECT_NAME = 'balm-ui';
var PROJECT_VERSION = '{{ version }}'; // Version placeholder
var CACHE_NAMES = [
  PROJECT_NAME + '-' + 'precache' + '-' + PROJECT_VERSION,
  PROJECT_NAME + '-' + 'runtime' + '-' + PROJECT_VERSION,
  PROJECT_NAME + '-' + 'ga' + '-' + PROJECT_VERSION,
  'images'
];

workbox.core.setCacheNameDetails({
  prefix: PROJECT_NAME,
  suffix: PROJECT_VERSION,
  precache: 'precache',
  runtime: 'runtime',
  googleAnalytics: 'ga'
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// Cache JavaScript and CSS
workbox.routing.registerRoute(function (context) {
  return (
    context.request.destination === 'script' ||
    context.request.destination === 'style'
  );
}, new workbox.strategies.StaleWhileRevalidate());

// Cache Images
workbox.routing.registerRoute(
  function (context) {
    return context.request.destination === 'image';
  },
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

// Cache Resources from a Specific Subdirectory
workbox.routing.registerRoute(
  new RegExp('/docs/'),
  new workbox.strategies.StaleWhileRevalidate()
);

// Cache Others
workbox.routing.registerRoute(
  /\.(?:ico)|json|ttf|woff2?$/,
  new workbox.strategies.StaleWhileRevalidate()
);

// Offline Google Analytics
workbox.googleAnalytics.initialize();

// Cleanup Outdated Caches
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (cacheList) {
        return Promise.all(
          cacheList.map(function (cacheName) {
            if (CACHE_NAMES.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(function () {
        self.clients.claim();
      })
  );
});

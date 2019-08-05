importScripts('workbox-sw.js');

// Configure Cache Names
workbox.core.setCacheNameDetails({
  prefix: 'balm-ui',
  suffix: 'v20190806', // NOTE: need update with every release
  precache: 'app-cache',
  runtime: 'app-runtime'
});

workbox.precaching.precacheAndRoute([]);

// Caching Images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

// Cache CSS and JavaScript Files
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources'
  })
);

// Cache Others
workbox.routing.registerRoute(
  /\.(?:ico)|json|ttf|woff(2?)$/,
  new workbox.strategies.StaleWhileRevalidate()
);

// Enable Offline Google Analytics
// workbox.googleAnalytics.initialize();

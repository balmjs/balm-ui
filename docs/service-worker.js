importScripts('workbox-sw.js');

// Configure Cache Names
workbox.core.setCacheNameDetails({
  prefix: 'balm-ui',
  suffix: 'v20200513', // NOTE: need update with every release
  precache: 'app-cache',
  runtime: 'app-runtime'
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// Caching Images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'balm-ui-images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
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
    cacheName: 'balm-ui-static-resources'
  })
);

// Cache Others
workbox.routing.registerRoute(
  /\.(?:ico)|json|ttf|woff(2?)$/,
  new workbox.strategies.StaleWhileRevalidate()
);

// Enable Offline Google Analytics
workbox.googleAnalytics.initialize();

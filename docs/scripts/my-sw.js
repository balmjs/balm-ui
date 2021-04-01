import { useBus, useStore } from 'balm-ui';
import { isProd } from '@/config';

if (isProd && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        console.log('THX BalmJS - https://github.com/balmjs/balm');

        let worker;
        reg.addEventListener('updatefound', () => {
          // A wild service worker has appeared in reg.installing!
          worker = reg.installing;

          worker.addEventListener('statechange', () => {
            // Has network.state changed?
            switch (worker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  const bus = useBus();
                  const store = useStore();
                  store.serviceWorker = worker;
                  // new update available
                  bus.emit('refresh');
                }
                // No update available
                break;
            }
          });
        });
      })
      .catch((error) => console.error('GG', error));

    let refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      window.location.reload();
      refreshing = true;
    });
  });
}

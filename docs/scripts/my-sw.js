import { isProd } from '@/config';

if (isProd && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => console.log('THX BalmJS - https://github.com/balmjs/balm'))
      .catch((error) => console.error('GG', error));
  });
}

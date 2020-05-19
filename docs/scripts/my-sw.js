import { isProd, VERSION } from '@/config';

if (isProd && 'serviceWorker' in navigator) {
  const KEY = 'balm-ui_version';

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('THX BalmJS', 'https://balmjs.com');

        if (localStorage.getItem(KEY) !== VERSION) {
          registration.update().then(() => {
            localStorage.setItem(KEY, VERSION);
          });
        }
      })
      .catch((error) => {
        console.log('Registration failed: ', error);
      });
  });
}

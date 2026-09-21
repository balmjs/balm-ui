import { isProd } from '@/config';

const GA_MEASUREMENT_ID = 'G-KL224V1QB5';

let myGtag = null;

export function createAnalytics() {
  if (isProd && !myGtag) {
    if (typeof window.gtag === 'function') {
      myGtag = window.gtag;
    } else {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', GA_MEASUREMENT_ID);

      myGtag = gtag;
    }
  }
}

export function statistics(pagePath = 'Unknown') {
  if (myGtag || (isProd && typeof window.gtag === 'function')) {
    const gtagFn = myGtag || window.gtag;
    setTimeout(function () {
      gtagFn('set', 'page_path', pagePath);
      gtagFn('event', 'page_view');
    }, 200);
  } else {
    createAnalytics();
  }
}

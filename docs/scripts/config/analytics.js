import { isProd } from '@/config';

const GA_MEASUREMENT_ID = 'G-MNH519PFX9';

let myGtag = null;

export function createAnalytics() {
  if (isProd && !myGtag) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', GA_MEASUREMENT_ID);

    myGtag = gtag;
  }
}

export function statistics(pagePath = 'Unknown') {
  if (myGtag) {
    setTimeout(function () {
      myGtag('set', 'page_path', pagePath);
      myGtag('event', 'page_view');
    }, 200);
  } else {
    createAnalytics();
  }
}

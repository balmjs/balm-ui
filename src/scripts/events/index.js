import getCustomEventPolyfill from './custom-event-polyfill';
import throttle from './throttle';

function createCustomEvent() {
  getCustomEventPolyfill();

  throttle('resize', 'balmResize');
  throttle('scroll', 'balmScroll');
}

export default createCustomEvent;

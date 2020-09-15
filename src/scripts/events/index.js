import getCustomEventPolyfill from './custom-event-polyfill';

function createCustomEvent() {
  getCustomEventPolyfill();

  const throttle = function (type, name, obj) {
    obj = obj || window;

    let running = false;
    const func = function () {
      if (running) {
        return;
      }

      running = true;

      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  throttle('resize', 'balmResize');
  throttle('scroll', 'balmScroll');
}

export default createCustomEvent;

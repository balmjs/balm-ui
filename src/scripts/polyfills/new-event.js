import './custom-event';

(function () {
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

  // You can init any event
  throttle('resize', 'balmResize');
  throttle('scroll', 'balmScroll');
})();

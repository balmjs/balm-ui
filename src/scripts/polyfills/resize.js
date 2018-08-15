import './CustomEvent';

(function() {
  const throttle = function(type, name, obj) {
    obj = obj || window;
    let running = false;
    const func = function() {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle('resize', 'balmResize');
})();

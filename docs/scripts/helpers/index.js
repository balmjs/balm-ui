(function() {
  let throttle = function(type, name, obj) {
      obj = obj || window;
      let running = false;
      let func = function() {
          if (running) { return; }
          running = true;
           requestAnimationFrame(function() {
              obj.dispatchEvent(new CustomEvent(name));
              running = false;
          });
      };
      obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle('resize', 'optimizedResize');
})();

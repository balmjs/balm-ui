/**
 * requestAnimationFrame polyfill by Erik Möller & Paul Irish et. al.
 * https://gist.github.com/1866474
 *
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 **/

/*jshint asi: false, browser: true, curly: true, eqeqeq: true, forin: false, newcap: true, noempty: true, strict: true, undef: true */

(function(window) {
  let lastTime = 0;
  let prefixes = 'webkit moz ms o'.split(' ');
  // get unprefixed rAF and cAF, if present
  let requestAnimationFrame = window.requestAnimationFrame;
  let cancelAnimationFrame = window.cancelAnimationFrame;
  // loop through vendor prefixes and get prefixed rAF and cAF
  let prefix;
  for (let i = 0; i < prefixes.length; i++) {
    if (requestAnimationFrame && cancelAnimationFrame) {
      break;
    }
    prefix = prefixes[i];
    requestAnimationFrame =
      requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
    cancelAnimationFrame =
      cancelAnimationFrame ||
      window[prefix + 'CancelAnimationFrame'] ||
      window[prefix + 'CancelRequestAnimationFrame'];
  }

  // fallback to setTimeout and clearTimeout if either request/cancel is not supported
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function(callback, element) {
      let currTime = new Date().getTime();
      let timeToCall = Math.max(0, 16 - (currTime - lastTime));
      let id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

    cancelAnimationFrame = function(id) {
      window.clearTimeout(id);
    };
  }

  // put in global namespace
  window.requestAnimationFrame = requestAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;
})(global);

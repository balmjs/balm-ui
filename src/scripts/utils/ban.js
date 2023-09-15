const defaults = {
  diff: 200,
  message: 'Ban debugger;',
  delay: 50,
  debug: false
};

export default function ban(options = {}) {
  const { diff, message, delay, debug } = Object.assign(defaults, options);

  (() => {
    let timer = null;
    let lastLog = '';

    console.oldDebug = console.debug;
    console.debug = function (str) {
      console.oldDebug(str);
      lastLog = str;
    };

    function block() {
      if (
        window.outerHeight - window.innerHeight > diff ||
        window.outerWidth - window.innerWidth > diff
      ) {
        document.body.innerHTML = message;
      }

      timer = setInterval(() => {
        (function () {
          return false;
        })
          ['constructor']('debugger')
          ['call']();

        if (lastLog === debug) {
          clearInterval(timer);
          timer = null;
        }
      }, delay);
    }

    try {
      block();
    } catch (e) {}
  })();
}

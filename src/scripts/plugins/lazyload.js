const DEFAULT_OPTIONS = {
  src: '',
  delay: 300,
  scrollEvent: 'scroll'
};

let globalOptions = DEFAULT_OPTIONS;
let canRendering = true;

const getImageElement = (el, fn) => {
  const imgEl = el.tagName === 'IMG' ? el : el.querySelector('img');

  if (imgEl && imgEl.tagName === 'IMG') {
    fn(imgEl);
  } else {
    canRendering = false;
    throw new Error('[v-lazyload]: <image> element not found');
  }
};

const LazyLoad = {
  // 初始化
  init(el, value) {
    el.setAttribute('data-src', value);
    el.setAttribute('src', globalOptions.src);
  },
  // 利用IntersectionObserver监听el
  observe(el) {
    const io = new IntersectionObserver((entries) => {
      const realSrc = el.dataset.src;

      if (entries[0].isIntersecting) {
        if (realSrc) {
          el.src = realSrc;
          el.removeAttribute('data-src');
        }
      }
    });

    io.observe(el);
  },
  // 监听scroll事件
  listenerScroll(el) {
    const handler = LazyLoad.throttle(LazyLoad.load, globalOptions.delay);

    LazyLoad.load(el);

    window.addEventListener(globalOptions.scrollEvent, () => {
      handler(el);
    });
  },
  // 加载真实图片
  load(el) {
    const windowHeight = document.documentElement.clientHeight;
    const elTop = el.getBoundingClientRect().top;
    const elBtm = el.getBoundingClientRect().bottom;

    if (elTop - windowHeight < 0 && elBtm > 0) {
      const realSrc = el.dataset.src;
      if (realSrc) {
        el.src = realSrc;
        el.removeAttribute('data-src');
      }
    }
  },
  // 节流
  throttle(fn, delay) {
    let timer;
    let prevTime;

    return function (...args) {
      const currTime = Date.now();
      const context = this;
      if (!prevTime) prevTime = currTime;
      clearTimeout(timer);

      if (currTime - prevTime > delay) {
        prevTime = currTime;
        fn.apply(context, args);
        clearTimeout(timer);
        return;
      }

      timer = setTimeout(function () {
        prevTime = Date.now();
        timer = null;
        fn.apply(context, args);
      }, delay);
    };
  }
};

const vLazyLoad = {
  name: 'lazyload',
  definition: {
    beforeMount(el, { value }) {
      if (canRendering) {
        getImageElement(el, (imgEl) => {
          LazyLoad.init(imgEl, value);
        });
      }
    },
    mounted(el) {
      if (canRendering) {
        getImageElement(el, (imgEl) =>
          IntersectionObserver
            ? LazyLoad.observe(imgEl)
            : LazyLoad.listenerScroll(imgEl)
        );
      }
    }
  }
};

function install(app, options = {}) {
  globalOptions = Object.assign({}, DEFAULT_OPTIONS, options);

  app.directive(vLazyLoad.name, vLazyLoad.definition);
}

const $lazyload = {
  install
};

export default $lazyload;
export { install };

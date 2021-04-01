import autoInit from '../config/auto-init';

const LazyLoad = {
  // 初始化
  init(el, val, def) {
    el.setAttribute('data-src', val);
    el.setAttribute('src', def);
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
    const handler = LazyLoad.throttle(LazyLoad.load, 300);
    LazyLoad.load(el);
    window.addEventListener('scroll', () => {
      handler(el);
    });
  },
  // 加载真实图片
  load(el) {
    const windowHeight = document.documentElement.clientHeight;
    const elTop = el.getBoundingClientRect().top;
    const elBtm = el.getBoundingClientRect().bottom;
    const realSrc = el.dataset.src;
    if (elTop - windowHeight < 0 && elBtm > 0) {
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

let defaultSrc = '';

const vLazyLoad = {
  id: 'lazyload',
  definition: {
    bind(el, { value }) {
      LazyLoad.init(el, value, defaultSrc);
    },
    inserted(el) {
      if (IntersectionObserver) {
        LazyLoad.observe(el);
      } else {
        LazyLoad.listenerScroll(el);
      }
    }
  }
};

const $lazyload = {
  install(Vue, options = {}) {
    defaultSrc = options.default;

    Vue.directive(vLazyLoad.id, vLazyLoad.definition);
  }
};

autoInit($lazyload);

export default $lazyload;

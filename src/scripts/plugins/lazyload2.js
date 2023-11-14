import Vue from 'vue';

const vueVersion = +Vue.version.split('.')[0];

const defaultConfig = {
  attributeName: 'data-src',
  completedName: 'data-loaded',
  beforeEvent: {
    name: 'beforeLoad',
    options: {}
  },
  afterEvent: {
    name: 'afterLoaded',
    options: {}
  },
  /**
   * @description IntersectionObserver options
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
   * */
  observerConfig: {
    rootMargin: '0px',
    threshold: 1.0
  }
};

export default {
  install(app) {
    let mountTarget = {
      2: app.prototype,
      3: app.config.globalProperties
    }[vueVersion];

    mountTarget.$lazyload = function (el, config) {
      let {
        beforeEvent,
        afterEvent,
        observerConfig,
        attributeName,
        completedName
      } = Object.assign({}, defaultConfig, config);

      let isImageNode = el.nodeName.toLowerCase() === 'img';

      let observer = new IntersectionObserver(
        ([{ isIntersecting, intersectionRatio }]) => {
          if (isIntersecting || intersectionRatio > 0) {
            el.dispatchEvent(new Event(beforeEvent.name, beforeEvent.options));

            let src = el.getAttribute(attributeName);
            let image = new Image();
            image.onload = () => {
              el.setAttribute(completedName, 1);
              el.dispatchEvent(new Event(afterEvent.name, afterEvent.options));
            };
            image.src = src;

            if (isImageNode) {
              el.src = src;
            } else {
              el.style.backgroundImage = `url(${src})`;
            }

            observer.unobserve(el);
            observer = null;
          }
        },
        observerConfig
      );

      observer.observe(el);
    };
  }
};

import autoInit from '../config/auto-init';

const vDebounce = {
  name: 'debounce',
  inserted(el, { value }) {
    const { callback, delay } = value;

    let timer;

    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        callback();
      }, delay || 1e3);
    });
  }
};

autoInit(vDebounce, 'directive');

export default vDebounce;

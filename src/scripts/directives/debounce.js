import getType from '../utils/typeof';

const vDebounce = {
  name: 'debounce',
  mounted(el, { value }) {
    if (getType(value) === 'object') {
      const { callback, delay } = value;

      if (getType(callback) !== 'function') {
        console.warn(`[v-debounce]: The 'callback' must be a function`);
      }

      let timer;

      el.addEventListener('click', () => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          callback();
        }, delay || 250);
      });
    } else {
      throw new Error(
        `[v-debounce]: The 'value' must be an object ({ callback: Function, delay?: number })`
      );
    }
  }
};

export default vDebounce;

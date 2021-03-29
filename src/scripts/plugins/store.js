import autoInit from '../config/auto-init';
import getType from '../utils/typeof';

let store;

function createStore(Vue, storeKey, options) {
  const el = document.body.appendChild(document.createElement('div'));
  const storeName = storeKey.replace(/^\S/, (s) => s.toUpperCase());

  store = new Vue(
    Object.assign(
      {
        el,
        name: storeName,
        render: (createElement) => createElement('')
      },
      options
    )
  );
}

const $store = {
  install(Vue, options = {}) {
    if (getType(options) === 'object' && Object.keys(options).length) {
      const storeKey = (options.name || 'Store').toLowerCase();

      createStore(Vue, storeKey, options);

      Vue.prototype.$store = store;
    }
  }
};

const useStore = () => store;

autoInit($store);

export default $store;
export { useStore };

import autoInstall from '../config/auto-install';
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

  return store;
}

const BalmUI_StorePlugin = {
  install(Vue, options = {}) {
    if (getType(options) === 'object' && Object.keys(options).length) {
      const storeKey = (options.name || 'Store').toLowerCase();

      Vue.prototype.$store = createStore(Vue, storeKey, options);
    }
  }
};

autoInstall(BalmUI_StorePlugin);

export default BalmUI_StorePlugin;

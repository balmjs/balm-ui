import Vue from 'vue';
import autoInstall from '../config/auto-install';

let store;

function createStore(storeKey, options) {
  const el = document.createElement('div');
  el.id = storeKey;
  document.body.appendChild(el);

  const storeName = storeKey.replace(/^\S/, (s) => s.toUpperCase());

  return new Vue(
    Object.assign(
      {
        el: `#${storeKey}`,
        name: storeName,
        template: '<div v-if="false"></div>'
      },
      options
    )
  );
}

const BalmUI_StorePlugin = {
  install(Vue, options) {
    const storeKey = (options.name || 'Store').toLowerCase();

    store = createStore(storeKey, options);

    Vue.prototype[`$${storeKey}`] = store;
  }
};

const useStore = () => store;

autoInstall(BalmUI_StorePlugin);

export default BalmUI_StorePlugin;
export { useStore };

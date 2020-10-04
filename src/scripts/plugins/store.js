import { createApp, computed } from 'vue';
import getType from '../utils/typeof';
import { createDiv } from '../utils/div';

let store;

function createStore(key, options) {
  if (!(getType(options) === 'function' && getType(options()) === 'object')) {
    throw new Error(
      `[BalmUI store]: The '$store' must be a function (return an object)`
    );
  } else {
    createDiv(key);
  }

  const keyName = key.replace(/^\S/, (s) => s.toUpperCase());
  const storeApp = createApp({
    name: `BalmUI${keyName}`,
    setup() {
      return options();
    },
    render: () => ''
  }).mount(`#${key}`);

  store = storeApp.$.setupState;
}

const BalmUI_StorePlugin = {
  install(app, options = {}) {
    const defaultStoreKey = (options.name || 'Store').toLowerCase();

    createStore(defaultStoreKey, options);

    app.config.globalProperties.$store = store;
    app.provide('store', store);
  }
};

const useStore = () => store;

export default BalmUI_StorePlugin;
export { useStore };

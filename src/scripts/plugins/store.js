import { createApp } from 'vue';
import getType from '../utils/typeof';
import { createDiv } from '../utils/div';

let store = new Map();
let defaultStoreKey;

function createStore(key, options) {
  if (store.has(key)) {
    throw new Error(`[BalmUI store]: The '${key}' already exists`);
  } else {
    createDiv(key);
  }

  const keyName = key.replace(/^\S/, (s) => s.toUpperCase());
  const storeApp = createApp({
    name: `BalmUI${keyName}`,
    setup() {
      return getType(options) === 'function' ? options() : {};
    },
    render: () => ''
  }).mount(`#${key}`);

  store.set(key, storeApp);
}

const BalmUI_StorePlugin = {
  install(app, options = {}) {
    if (Object.keys(options).length) {
      defaultStoreKey = (options.name || 'Store').toLowerCase();

      createStore(defaultStoreKey, options);

      app.config.globalProperties[`$${defaultStoreKey}`] = store.get(
        defaultStoreKey
      );
      app.provide(defaultStoreKey, store.get(defaultStoreKey));
    }
  }
};

const useStore = (key = defaultStoreKey) => store.get(key);

export default BalmUI_StorePlugin;
export { createStore, useStore };

import Vue from 'vue';
import autoInstall from '../config/auto-install';

const isDev = process.env.NODE_ENV === 'development';

function createDevMixin() {
  const el = document.createElement('div');

  return {
    el,
    created() {
      document.body.appendChild(el);
    },
    template: '<div v-if="false"></div>'
  };
}

function createStore(options) {
  return new Vue(
    Object.assign(
      { name: 'Store', mixins: [isDev ? createDevMixin() : {}] },
      options
    )
  );
}

const BalmUI_StorePlugin = {
  install(Vue, options) {
    Vue.prototype.$store = createStore(options);
  }
};

autoInstall(BalmUI_StorePlugin);

export default BalmUI_StorePlugin;

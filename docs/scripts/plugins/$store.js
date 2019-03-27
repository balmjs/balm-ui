import store from '@/store';

export default {
  install(Vue) {
    Vue.prototype.$store = store;
  }
};

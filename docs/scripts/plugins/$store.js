import store from '@/store';

export default {
  install(app) {
    app.config.globalProperties.$store = store;
    app.provide('$store', store);
  }
};

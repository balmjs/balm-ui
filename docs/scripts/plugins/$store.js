import store from '@/store';

export default {
  install(app) {
    app.provide('$store', store);
  }
};

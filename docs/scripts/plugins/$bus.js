import bus from '@/store/bus';

export default {
  install(app) {
    app.config.globalProperties.$bus = bus;
    app.provide('$bus', bus);
  }
};

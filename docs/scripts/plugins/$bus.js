import bus from '../store/bus';

export default {
  install(Vue) {
    Vue.prototype.$bus = bus;
  }
};

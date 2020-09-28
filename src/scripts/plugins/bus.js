import Vue from 'vue';
import autoInstall from '../config/auto-install';

const busApp = new Vue();

function on(eventName, callback) {
  busApp.$on(eventName, callback);
}

function off(eventName, callback) {
  callback ? busApp.$off(eventName, callback) : busApp.$off(eventName);
}

function emit(eventName, ...args) {
  busApp.$emit(eventName, ...args);
}

const bus = {
  on,
  off,
  emit
};

const BalmUI_BusPlugin = {
  install(Vue) {
    Vue.prototype.$bus = bus;
  }
};

const useBus = () => bus;

autoInstall(BalmUI_BusPlugin);

export default BalmUI_BusPlugin;
export { useBus };

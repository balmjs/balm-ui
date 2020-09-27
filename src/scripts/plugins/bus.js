import Vue from 'vue';
import autoInstall from '../config/auto-install';

const busApp = new Vue();

function pub(eventName, ...args) {
  busApp.$emit(eventName, ...args);
}

function sub(eventName, callback) {
  busApp.$on(eventName, callback);
}

const bus = {
  pub,
  sub
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

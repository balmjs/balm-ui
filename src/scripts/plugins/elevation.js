import elevation from '../mixins/elevation';

export default {
  install(Vue) {
    Vue.prototype.zSpace = elevation.methods.zSpace;
  }
};

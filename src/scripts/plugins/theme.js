import theme from '../mixins/theme';

export default {
  install(Vue) {
    for (let key in theme.methods) {
      Vue.prototype[key] = theme.methods[key];
    }
  }
};

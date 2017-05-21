import elevation from '../mixins/elevation';
import theme from '../mixins/theme';
import typography from '../mixins/typography';

const methods = Object.assign({}, elevation.methods, theme.methods, typography.methods);

export default {
  install(Vue) {
    Object.keys(methods).forEach(key => {
      Vue.prototype[key] = methods[key];
    });
  }
};

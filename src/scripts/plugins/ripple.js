import autoInstall from '../config/auto-install';

const RIPPLE_COLOR = {
  PRIMARY: 'mdc-ripple-surface--primary',
  SECONDARY: 'mdc-ripple-surface--accent'
};

const ripple = (states = '') => {
  let classes = ['mdc-ripple-surface'];

  switch (states) {
    case 1:
    case 'primary':
      classes.push(RIPPLE_COLOR.PRIMARY);
      break;
    case 2:
    case 'secondary':
      classes.push(RIPPLE_COLOR.SECONDARY);
      break;
  }

  return classes;
};

const BalmUI_RipplePlugin = {
  install(Vue) {
    Vue.prototype.$ripple = ripple;
  }
};

autoInstall(BalmUI_RipplePlugin);

export default BalmUI_RipplePlugin;

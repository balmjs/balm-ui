import autoInstall from '../config/auto-install';

const Z_SPACE_MIN = 0;
const Z_SPACE_MAX = 24;

const shadow = (z = 0, zTransition = false) => {
  let N = z;
  let result = zTransition ? ['mdc-elevation-transition'] : [];

  if (N >= Z_SPACE_MIN && N <= Z_SPACE_MAX) {
    result.push(`mdc-elevation--z${N}`);
  } else {
    console.warn(
      'The elevation values are mapped out in a "z-space" and range from 0 to 24.'
    );
  }

  return result.join(' ');
};

const BalmUI_ElevationPlugin = {
  install(Vue) {
    Vue.prototype.$shadow = shadow;
  }
};

autoInstall(BalmUI_ElevationPlugin);

export default BalmUI_ElevationPlugin;

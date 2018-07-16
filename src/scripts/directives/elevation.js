import autoInit from './register';

const ELEVATION = {
  Z_SPACE: {
    MIN: 0,
    MAX: 24
  },
  TRANSITION: 'mdc-elevation-transition'
};

const initElevation = (el, {
  value,
  modifiers
}) => {
  let classes = [];

  if (value >= ELEVATION.Z_SPACE.MIN && value <= ELEVATION.Z_SPACE.MAX) {
    classes.push(`mdc-elevation--z${value}`);
  } else {
    console.warn(
      'The elevation values are mapped out in a "z-space" and range from 0 to 24.'
    );
  }

  if (modifiers.transition) {
    classes.push('mdc-elevation-transition');
  }

  el.classList.add(...classes);
};

const BalmUI_ElevationDirective = {
  name: 'shadow',
  bind: function (el, binding) {
    initElevation(el, binding);
  }
};

autoInit(BalmUI_ElevationDirective.name, BalmUI_ElevationDirective);

export default BalmUI_ElevationDirective;

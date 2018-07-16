import autoInit from './register';
import getType from '../utils/typeof';

const ELEVATION = {
  Z_SPACE: {
    MIN: 0,
    MAX: 24
  },
  TRANSITION: 'mdc-elevation-transition'
};

const getElevation = value => {
  let result = '';

  if (value >= ELEVATION.Z_SPACE.MIN && value <= ELEVATION.Z_SPACE.MAX) {
    result = `mdc-elevation--z${value}`;
  } else {
    console.warn(
      'The elevation values are mapped out in a "z-space" and range from 0 to 24.'
    );
  }

  return result;
};

const initElevation = (el, { value, modifiers }) => {
  let classes = [];

  if (modifiers.transition) {
    if (getType(value) === 'array' && value.length === 2) {
      let defaultClass = getElevation(value[0]);
      let hoverClass = getElevation(value[1]);

      classes.push(defaultClass);
      classes.push(ELEVATION.TRANSITION);

      el.addEventListener('mouseenter', () => {
        el.classList.add(hoverClass);
      });
      el.addEventListener('mouseleave', () => {
        el.classList.remove(hoverClass);
      });
    } else {
      console.warn('Invalid elevation value.');
    }
  } else {
    classes.push(getElevation(value));
  }

  el.classList.add(...classes);
};

const BalmUI_ElevationDirective = {
  name: 'shadow',
  bind: function(el, binding) {
    initElevation(el, binding);
  }
};

autoInit(BalmUI_ElevationDirective.name, BalmUI_ElevationDirective);

export default BalmUI_ElevationDirective;

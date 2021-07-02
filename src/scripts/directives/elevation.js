// Define elevation constants
const UI_ELEVATION = {
  Z_SPACE: {
    MIN: 0,
    MAX: 24
  },
  cssClasses: {
    transition: 'mdc-elevation-transition',
    overlay: 'mdc-elevation-overlay'
  }
};

const getElevation = (value) => {
  let result = '';

  if (value >= UI_ELEVATION.Z_SPACE.MIN && value <= UI_ELEVATION.Z_SPACE.MAX) {
    result = `mdc-elevation--z${value}`;
  } else {
    console.warn(
      '[v-shadow]',
      `The elevation values are mapped out in a 'z-space' and range from 0 to 24`
    );
  }

  return result;
};

const updateElevation = (method, el, { value, modifiers }) => {
  let classes = [];

  if (modifiers.transition) {
    if (Array.isArray(value) && value.length === 2) {
      let defaultClass = getElevation(value[0]);
      let hoverClass = getElevation(value[1]);

      classes.push(defaultClass);
      classes.push(UI_ELEVATION.cssClasses.transition);

      el[`${method}EventListener`]('mouseenter', () => {
        el.classList.add(hoverClass);
      });
      el[`${method}EventListener`]('mouseleave', () => {
        el.classList.remove(hoverClass);
      });
    } else {
      console.warn('[v-shadow]', 'Invalid elevation value');
    }
  } else {
    classes.push(getElevation(value));
  }

  el.classList[method](...classes);

  if (modifiers.overlay) {
    const overlayEl = document.createElement('div');
    overlayEl.className = UI_ELEVATION.cssClasses.overlay;
    el.insertBefore(overlayEl, el.firstChild);
  }
};

const vShadow = {
  name: 'shadow',
  beforeMount(el, binding) {
    updateElevation('add', el, binding);
  },
  beforeUnmount(el, binding) {
    updateElevation('remove', el, binding);
  }
};

export default vShadow;

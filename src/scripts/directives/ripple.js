import { MDCRipple } from '../../material-components-web/ripple';

// Define ripple constants
const UI_RIPPLE = {
  color: {
    base: 'mdc-ripple-surface',
    primary: 'mdc-ripple-surface--primary',
    secondary: 'mdc-ripple-surface--secondary'
  }
};

const updateRipple = (method, el, { value }) => {
  if (value !== false) {
    let classes = [UI_RIPPLE.color.base];

    switch (value) {
      case 1:
      case 'primary':
        classes.push(UI_RIPPLE.color.primary);
        break;
      case 2:
      case 'secondary':
        classes.push(UI_RIPPLE.color.secondary);
        break;
    }

    el.classList[method](...classes);
  }
};

const initRipple = (el, { value, arg, modifiers }) => {
  if (!(value === false || arg === 'cssOnly')) {
    const ripple = new MDCRipple(el);
    if (modifiers.unbounded) {
      ripple.unbounded = true;
    }
  }
};

const vRipple = {
  name: 'ripple',
  beforeMount(el, binding) {
    updateRipple('add', el, binding);
  },
  mounted(el, binding) {
    initRipple(el, binding);
  },
  beforeUnmount(el, binding) {
    updateRipple('remove', el, binding);
  }
};

export default vRipple;

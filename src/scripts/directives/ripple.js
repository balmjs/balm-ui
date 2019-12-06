import autoInit from './register';
import { MDCRipple } from '../../material-components-web/ripple';

// Define constants
const RIPPLE_COLOR = {
  BASE: 'mdc-ripple-surface',
  PRIMARY: 'mdc-ripple-surface--primary',
  SECONDARY: 'mdc-ripple-surface--accent'
};

const updateRipple = (method, el, { value }) => {
  let classes = [RIPPLE_COLOR.BASE];

  switch (value) {
    case 1:
    case 'primary':
      classes.push(RIPPLE_COLOR.PRIMARY);
      break;
    case 2:
    case 'secondary':
      classes.push(RIPPLE_COLOR.SECONDARY);
      break;
  }

  el.classList[method](...classes);
};

const initRipple = (el, { arg, modifiers }) => {
  if (arg !== 'cssOnly') {
    const ripple = new MDCRipple(el);
    if (modifiers.unbounded) {
      ripple.unbounded = true;
    }
  }
};

const BalmUI_RippleDirective = {
  name: 'ripple',
  bind(el, binding) {
    updateRipple('add', el, binding);
  },
  inserted(el, binding) {
    initRipple(el, binding);
  },
  unbind(el, binding) {
    updateRipple('remove', el, binding);
  }
};

autoInit(BalmUI_RippleDirective.name, BalmUI_RippleDirective);

export default BalmUI_RippleDirective;

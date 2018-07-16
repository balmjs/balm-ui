import autoInit from './register';
import {
  MDCRipple
} from '../../material-components-web/ripple';

const RIPPLE_COLOR = {
  BASE: 'mdc-ripple-surface',
  PRIMARY: 'mdc-ripple-surface--primary',
  SECONDARY: 'mdc-ripple-surface--accent'
};

const initRipple = (el, {
  value,
  modifiers
}) => {
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

  el.classList.add(...classes);
};

const BalmUI_RippleDirective = {
  name: 'ripple',
  bind: function (el, binding) {
    initRipple(el, binding);
  },
  inserted(el, binding) {
    if (binding.arg !== 'cssOnly') {
      const ripple = new MDCRipple(el);
      if (binding.modifiers.unbounded) {
        ripple.unbounded = true;
      }
    }
  }
};

autoInit(BalmUI_RippleDirective.name, BalmUI_RippleDirective);

export default BalmUI_RippleDirective;

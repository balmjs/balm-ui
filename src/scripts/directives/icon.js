import autoInit from './register';

const ICON_CLASS = {
  BASE: 'material-icons',
  DARK: 'md-dark',
  LIGHT: 'md-light',
  INACTIVE: 'md-inactive'
};

const initElevation = (el, {
  arg,
  modifiers
}) => {
  let classes = [ICON_CLASS.BASE];

  if (arg === 'dark') {
    classes.push(ICON_CLASS.DARK);
  }

  if (arg === 'light') {
    classes.push(ICON_CLASS.LIGHT);
  }

  if (modifiers.inactive) {
    classes.push(ICON_CLASS.INACTIVE);
  }

  el.classList.add(...classes);
};

const BalmUI_ICONDirective = {
  name: 'icon',
  bind: function (el, binding) {
    initElevation(el, binding);
  }
};

autoInit(BalmUI_ICONDirective.name, BalmUI_ICONDirective);

export default BalmUI_ICONDirective;

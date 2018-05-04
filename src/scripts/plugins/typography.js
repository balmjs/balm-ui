const T_BASE = 'mdc-typography';
const T_STYLES = [
  'headline1',
  'headline2',
  'headline3',
  'headline4',
  'headline5',
  'headline6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline'
];

const tt = (style = '') => {
  let result = '';

  if (T_STYLES.includes(style.toLowerCase())) {
    result = `${T_BASE}--${style}`;
  } else {
    console.warn(
      '[BalmUI] Please set a typographic style:\n' + JSON.stringify(T_STYLES)
    );
  }

  return result;
};

const BalmUI_TypographyPlugin = {
  install(Vue) {
    document.querySelector('body').classList.add(T_BASE);

    Vue.prototype.$tt = tt;
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI_TypographyPlugin);
}

export default BalmUI_TypographyPlugin;

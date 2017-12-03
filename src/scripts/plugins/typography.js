const STYLES = [
  'display4',
  'display3',
  'display2',
  'display1',
  'headline',
  'title',
  'subheading2',
  'subheading1',
  'body2',
  'body1',
  'caption'
];

const tt = (style = '', adjustMargin = false) => {
  let result = STYLES.includes(style.toLowerCase())
    ? [`mdc-typography--${style}`]
    : [];
  if (adjustMargin) {
    result.push('mdc-typography--adjust-margin');
  }
  return result.join(' ');
};

const BalmUI_TypographyPlugin = {
  install(Vue) {
    document.querySelector('body').classList.add('mdc-typography');

    Vue.prototype.$tt = tt;
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI_TypographyPlugin);
}

export default BalmUI_TypographyPlugin;

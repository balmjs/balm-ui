import autoInstall from '../config/auto-install';

// Define constants
const THEME_STYLES = [
  'primary',
  'secondary',
  'background',
  'surface',
  'on-primary',
  'on-secondary',
  'on-surface',
  'primary-bg',
  'secondary-bg'
];
const TEXT_STYLES = ['primary', 'secondary', 'hint', 'disabled', 'icon'];
const THEME_TONES = ['background', 'light', 'dark'];

const themeColor = (style = '') => {
  let className = '';
  let currentStyle = style.toLowerCase();

  if (THEME_STYLES.includes(currentStyle)) {
    className = `mdc-theme--${currentStyle}`;
  } else {
    console.warn(
      'Please choose a theme style: ' + JSON.stringify(THEME_STYLES)
    );
  }

  return className;
};

const textColor = (style = '', tone = 'background') => {
  let className = '';

  if (TEXT_STYLES.includes(style.toLowerCase())) {
    if (THEME_TONES.includes(tone.toLowerCase())) {
      className = `mdc-theme--text-${style}-on-${tone}`;
    } else {
      console.warn(
        'Please choose a theme tone: ' + JSON.stringify(THEME_TONES)
      );
    }
  } else {
    console.warn('Please choose a text style: ' + JSON.stringify(TEXT_STYLES));
  }

  return className;
};

const BalmUI_ThemePlugin = {
  install(Vue) {
    Vue.prototype.$themeColor = themeColor;
    Vue.prototype.$textColor = textColor;
  }
};

autoInstall(BalmUI_ThemePlugin);

export default BalmUI_ThemePlugin;

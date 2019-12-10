import autoInstall from '../config/auto-install';

// Define theme constants
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
const MESSAGE = {
  THEME_STYLE: 'Please choose a theme style: ' + JSON.stringify(THEME_STYLES),
  TEXT_STYLE: 'Please choose a text style: ' + JSON.stringify(TEXT_STYLES),
  THEME_TONE: 'Please choose a theme tone: ' + JSON.stringify(THEME_TONES)
};

const $themeColor = (style = '') => {
  let className = '';

  if (THEME_STYLES.includes(style)) {
    className = `mdc-theme--${style}`;
  } else {
    console.warn(MESSAGE.THEME_STYLE);
  }

  return className;
};

const $textColor = (style = '', tone = 'background') => {
  let className = '';

  if (TEXT_STYLES.includes(style)) {
    if (THEME_TONES.includes(tone)) {
      className = `mdc-theme--text-${style}-on-${tone}`;
    } else {
      console.warn(MESSAGE.THEME_TONE);
    }
  } else {
    console.warn(MESSAGE.TEXT_STYLE);
  }

  return className;
};

const $setTheme = (style, value) => {
  if (THEME_STYLES.includes(style)) {
    document.documentElement.style.setProperty(`--mdc-theme-${style}`, value);
  } else {
    console.warn(MESSAGE.THEME_STYLE);
  }
};

const $setTextTheme = (style, tone, value) => {
  if (TEXT_STYLES.includes(style)) {
    if (THEME_TONES.includes(tone)) {
      document.documentElement.style.setProperty(
        `--mdc-theme-text-${style}-on-${tone}`,
        value
      );
    } else {
      console.warn(MESSAGE.THEME_TONE);
    }
  } else {
    console.warn(MESSAGE.TEXT_STYLE);
  }
};

const BalmUI_ThemePlugin = {
  install(Vue) {
    Vue.prototype.$themeColor = $themeColor;
    Vue.prototype.$textColor = $textColor;
    Vue.prototype.$setTheme = $setTheme;
    Vue.prototype.$setTextTheme = $setTextTheme;
  }
};

autoInstall(BalmUI_ThemePlugin);

export default BalmUI_ThemePlugin;

import autoInstall from '../config/auto-install';

// Define theme constants
const THEME_STYLES = [
  'primary',
  'secondary',
  'background',
  'surface',
  'error',
  'on-primary',
  'on-secondary',
  'on-surface',
  'on-error'
];
const ALL_THEME_STYLES = [...THEME_STYLES, 'primary-bg', 'secondary-bg'];
const TEXT_STYLES = ['primary', 'secondary', 'hint', 'disabled', 'icon'];
const THEME_TONES = ['background', 'light', 'dark'];
const MESSAGE = {
  THEME_STYLE: 'Please choose a theme style: ' + JSON.stringify(THEME_STYLES),
  ALL_THEME_STYLES:
    'Please choose a theme style: ' + JSON.stringify(ALL_THEME_STYLES),
  TEXT_STYLE: 'Please choose a text style: ' + JSON.stringify(TEXT_STYLES),
  THEME_TONE: 'Please choose a theme tone: ' + JSON.stringify(THEME_TONES)
};

class Theme {
  setThemeProperty(style, value) {
    document.documentElement.style.setProperty(`--mdc-theme-${style}`, value);
  }

  set primary(value) {
    this.setThemeProperty('primary', value);
  }

  set secondary(value) {
    this.setThemeProperty('secondary', value);
  }

  set background(value) {
    this.setThemeProperty('background', value);
  }

  set surface(value) {
    this.setThemeProperty('surface', value);
  }

  set error(value) {
    this.setThemeProperty('error', value);
  }

  set onPrimary(value) {
    this.setThemeProperty('on-primary', value);
  }

  set onSecondary(value) {
    this.setThemeProperty('on-secondary', value);
  }

  set onSurface(value) {
    this.setThemeProperty('on-surface', value);
  }

  set onError(value) {
    this.setThemeProperty('on-error', value);
  }

  set themeColors(colors) {
    const themeStyles = Object.keys(colors);

    if (themeStyles.every((style) => THEME_STYLES.includes(style))) {
      themeStyles.forEach((style) =>
        this.setThemeProperty(style, colors[style])
      );
    } else {
      console.warn(MESSAGE.THEME_STYLE);
    }
  }

  getThemeClass(style) {
    let result = '';

    if (ALL_THEME_STYLES.includes(style)) {
      result = `mdc-theme--${style}`;
    } else {
      console.warn(MESSAGE.ALL_THEME_STYLES);
    }

    return result;
  }

  color(style = '') {
    let className = '';

    if (Array.isArray(style)) {
      className = style.map((curStyle) => this.getThemeClass(curStyle));
    } else {
      className = this.getThemeClass(style);
    }

    return className;
  }

  getTextClass(style, tone) {
    let result = '';

    if (TEXT_STYLES.includes(style)) {
      if (THEME_TONES.includes(tone)) {
        result = `mdc-theme--text-${style}-on-${tone}`;
      } else {
        console.warn(MESSAGE.THEME_TONE);
      }
    } else {
      console.warn(MESSAGE.TEXT_STYLE);
    }

    return result;
  }

  text(style = '', tone = 'background') {
    let className = '';

    if (Array.isArray(style)) {
      let result = style.map((curStyle) => this.getTextClass(style, tone));
      className = result.join(',');
    } else {
      className = this.getTextClass(style, tone);
    }

    return className;
  }
}

const BalmUI_ThemePlugin = {
  install(Vue) {
    Vue.prototype.$theme = new Theme();
  }
};

autoInstall(BalmUI_ThemePlugin);

export default BalmUI_ThemePlugin;

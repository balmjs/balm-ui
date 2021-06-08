import { contrastTone } from '../utils/color';

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

const themeColors = new Map();
const textColors = new Map();

class ThemeStyle {
  get themeColors() {
    return themeColors;
  }
  get textColors() {
    return textColors;
  }

  getTheme(style, isClass = false) {
    let result = '';

    if (ALL_THEME_STYLES.includes(style)) {
      result = isClass ? `mdc-theme--${style}` : themeColors.get(style);
    } else {
      throw new Error(
        `[$theme]: Theme ${isClass ? 'Class' : 'Color'}]: ${
          MESSAGE.ALL_THEME_STYLES
        }`
      );
    }

    return result;
  }
  setTheme(style, value) {
    document.documentElement.style.setProperty(`--mdc-theme-${style}`, value);
    themeColors.set(style, value);
  }

  themeText(style, tone, fn) {
    let result = '';

    if (TEXT_STYLES.includes(style)) {
      if (THEME_TONES.includes(tone)) {
        result = fn();
      } else {
        throw new Error(`[$theme]: ${MESSAGE.THEME_TONE}`);
      }
    } else {
      throw new Error(`[$theme]: ${MESSAGE.TEXT_STYLE}`);
    }

    return result;
  }

  getText(style, tone, isClass = false) {
    return this.themeText(style, tone, () => {
      return isClass
        ? `mdc-theme--text-${style}-on-${tone}`
        : textColors.get(`${style}-on-${tone}`);
    });
  }
  setText(style, tone, value) {
    this.themeText(style, tone, () => {
      document.documentElement.style.setProperty(
        `--mdc-theme-text-${style}-on-${tone}`,
        value
      );
      textColors.set(`${style}-on-${tone}`, value);
    });
  }
}

class Theme extends ThemeStyle {
  get primary() {
    return themeColors.get('primary');
  }
  set primary(value) {
    this.setTheme('primary', value);
    this.setTheme(
      'on-primary',
      contrastTone(value) === 'dark' ? '#000' : '#fff'
    );
  }

  get secondary() {
    return themeColors.get('secondary');
  }
  set secondary(value) {
    this.setTheme('secondary', value);
    this.setTheme(
      'on-secondary',
      contrastTone(value) === 'dark' ? '#000' : '#fff'
    );
  }

  get background() {
    return themeColors.get('background');
  }
  set background(value) {
    this.setTheme('background', value);
  }

  get surface() {
    return themeColors.get('surface');
  }
  set surface(value) {
    this.setTheme('surface', value);
    this.setTheme(
      'on-surface',
      contrastTone(value) === 'dark' ? '#000' : '#fff'
    );
  }

  get error() {
    return themeColors.get('error');
  }
  set error(value) {
    this.setTheme('error', value);
    this.setTheme('on-error', contrastTone(value) === 'dark' ? '#000' : '#fff');
  }

  get onPrimary() {
    return themeColors.get('on-primary');
  }
  set onPrimary(value) {
    this.setTheme('on-primary', value);
  }

  get onSecondary() {
    return themeColors.get('on-secondary');
  }
  set onSecondary(value) {
    this.setTheme('on-secondary', value);
  }

  get onSurface() {
    return themeColors.get('on-surface');
  }
  set onSurface(value) {
    this.setTheme('on-surface', value);
  }

  get onError() {
    return themeColors.get('on-error');
  }
  set onError(value) {
    this.setTheme('on-error', value);
  }

  set colors(colors) {
    const themeStyles = Object.keys(colors);

    if (themeStyles.every((style) => THEME_STYLES.includes(style))) {
      themeStyles.forEach((style) => this.setTheme(style, colors[style]));
      ['primary', 'secondary', 'surface', 'error'].forEach((style) => {
        if (
          themeStyles.includes(style) &&
          !themeStyles.includes(`on-${style}`)
        ) {
          this.setTheme(
            `on-${style}`,
            contrastTone(colors[style]) === 'dark' ? '#000' : '#fff'
          );
        }
      });
    } else {
      throw new Error(`[$theme]: ${MESSAGE.THEME_STYLE}`);
    }
  }

  getThemeColor(style) {
    return this.getTheme(style);
  }
  getThemeClass(style) {
    let result = '';

    if (Array.isArray(style)) {
      result = style.map((themeStyle) => this.getTheme(themeStyle, true));
    } else {
      result = this.getTheme(style, true);
    }

    return result;
  }

  getTextColor(style, tone = 'background') {
    return this.getText(style, tone);
  }
  getTextClass(style, tone = 'background') {
    return this.getText(style, tone, true);
  }
  setTextColor(style, value) {
    this.setText(style, 'background', value);
  }

  getTextColorOnLight(style) {
    return this.getTextColor(style, 'light');
  }
  getTextClassOnLight(style) {
    return this.getTextClass(style, 'light');
  }
  setTextColorOnLight(style, value) {
    this.setText(style, 'light', value);
  }

  getTextColorOnDark(style) {
    return this.getTextColor(style, 'dark');
  }
  getTextClassOnDark(style) {
    return this.getTextClass(style, 'dark');
  }
  setTextColorOnDark(style, value) {
    this.setText(style, 'dark', value);
  }
}

const theme = new Theme();

let isColored = false;

function install(app, colors = {}) {
  app.mixin({
    mounted() {
      if (!isColored) {
        isColored = true;
        theme.colors = colors;
      }
    }
  });

  app.config.globalProperties.$theme = theme;
  app.provide('theme', theme);
}

const $theme = {
  install
};

const useTheme = () => theme;

export default $theme;
export { install, useTheme };

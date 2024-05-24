import pkg from '../../../package.json';

export const VERSION = pkg.version;
export const MDI_INFO = {
  version: '142',
  updated: '2023.04.06'
};
export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const domain = isProd ? '//material.balmjs.com' : '';
export const lazyLoadedTime = 1e3;

// 同步 Sass variables
export const $MIN_WIDTH = 1240 + 1;

export const translations = [
  {
    text: 'English',
    value: 'en'
  },
  {
    text: '中文',
    value: 'zh'
  }
];

export const themes = {
  light: {
    primary: '#6200ee',
    secondary: '#018786',
    background: '#fff',
    surface: '#fff',
    error: '#b00020'
  },
  dark: {
    primary: '#bb86fc',
    secondary: '#03dac6',
    background: '#121212',
    surface: '#121212',
    error: '#cf6679'
  }
};

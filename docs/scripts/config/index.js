import { version } from '../../../package.json';

export const VERSION = version;
export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';

// 同步 Sass variables
// export const MDI_VERSION = 53;
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

export const theme = {
  light: {
    primary: '#6200ee',
    secondary: '#018786',
    background: '#fff',
    surface: '#fff',
    error: '#b00020',
    'on-primary': '#fff',
    'on-secondary': '#fff',
    'on-surface': '#000',
    'on-error': '#fff'
  },
  dark: {
    primary: '#bb86fc',
    secondary: '#03dac6',
    background: '#121212',
    surface: '#121212',
    error: '#cf6679',
    'on-primary': '#fff',
    'on-secondary': '#fff',
    'on-surface': '#fff',
    'on-error': '#000'
  }
};

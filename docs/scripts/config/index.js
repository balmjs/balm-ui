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
    surface: '#fff',
    error: '#b00020'
  },
  dark: {
    primary: '#bb86fc',
    secondary: '#03dac6',
    surface: '#121212',
    error: '#cf6679'
  }
};

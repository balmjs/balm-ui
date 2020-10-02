import { version } from '../../../package.json';
import prismjs from 'prismjs';

export const VERSION = version;
export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const lazyLoadedTime = 1e3;

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

export const themes = {
  light: {
    primary: '#6200ee',
    secondary: '#018786',
    background: '#fff',
    surface: '#fff',
    error: '#b00020'
  },
  dark: {
    primary: '#ce93d8',
    secondary: '#80cbc4',
    background: '#121212',
    surface: '#121212',
    error: '#cf6679'
  }
};

export function setGlobalProps(app) {
  app.config.isCustomElement = (tag) => tag.startsWith('ui-');

  app.config.globalProperties.$domain = isProd
    ? '//next-material.balmjs.com'
    : '';

  app.config.globalProperties.$prism = prismjs;

  app.config.globalProperties.$docs = {
    props: {
      thead: ['Name', 'Type', 'Default', 'Description'],
      tbody: [
        'name',
        'type',
        'default',
        {
          field: 'description',
          raw: true
        }
      ]
    },
    slots: {
      thead: ['Name', 'Description', 'Slot'],
      tbody: ['name', 'description', 'props']
    },
    events: {
      thead: ['Name', 'Type', 'Description'],
      tbody: ['name', 'type', 'description']
    },
    sass: {
      thead: ['Variable', 'Description'],
      tbody: [
        'var',
        {
          field: 'description',
          raw: true
        }
      ]
    }
  };
}

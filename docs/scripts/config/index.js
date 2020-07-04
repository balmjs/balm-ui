import { version } from '../../../package.json';

export const VERSION = version;
export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';

// 同步 Sass variables
export const MDI_VERSION = 53;
export const $MIN_WIDTH = 1240 + 1;

import { createI18n } from 'vue-i18n/index';
import en from './en.json';
import zh from './zh.json';
// import pickerLangZh from 'pickerLangZh';

const i18n = new createI18n({
  locale: 'en',
  messages: {
    en,
    zh
  }
});

// for picker
// const pickerLang = {
//   zh: pickerLangZh.zh
// };

// Vue.prototype.pickerLang = pickerLang;

export default i18n;

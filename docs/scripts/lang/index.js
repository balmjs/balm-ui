import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en.json';
import zh from './zh.json';
import pickerLangZh from 'pickerLangZh';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en,
    zh
  }
});

// for picker
const pickerLang = {
  zh: pickerLangZh.zh
};

Vue.prototype.pickerLang = pickerLang;

export default i18n;

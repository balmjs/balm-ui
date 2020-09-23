import { ref } from 'vue';
import { useBus } from 'balm-ui';

const bus = useBus();

const lang = ref('');

function getLang() {
  return localStorage.getItem('lang') || 'en';
}

function setLang({ value }) {
  lang.value = value;
  localStorage.setItem('lang', value);
  bus.pub('switch-lang', value);
}

lang.value = getLang();

const useLangStore = () => {
  return { lang, getLang, setLang };
};

export default useLangStore;

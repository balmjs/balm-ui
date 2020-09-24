import { reactive, toRefs } from 'vue';
import { useBus } from 'balm-ui';

const bus = useBus();

const state = reactive({
  lang: '',
  showTranslations: false
});

function getLang() {
  return localStorage.getItem('lang') || 'en';
}

function setLang({ value }) {
  state.lang = value;
  localStorage.setItem('lang', value);
  bus.pub('switch-lang', value);
}

state.lang = getLang();

const useLangStore = () => {
  return { ...toRefs(state), getLang, setLang };
};

export default useLangStore;

import { useBus } from 'balm-ui';

const bus = useBus();

export default {
  data() {
    return {
      lang: ''
    };
  },
  created() {
    this.lang = this.getLang();
  },
  methods: {
    getLang() {
      return localStorage.getItem('lang') || 'en';
    },
    setLang({ value }) {
      this.lang = value;
      localStorage.setItem('lang', value);
      bus.pub('switch-lang', value);
    }
  }
};

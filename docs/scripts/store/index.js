import Vue from 'vue';
import { isDev, theme } from '@/config';
import bus from './bus';
import dev from './dev';
import page from './page';

export default new Vue({
  name: 'Store',
  mixins: [isDev ? dev : {}, page],
  data() {
    return {
      theme: '',
      lang: ''
    };
  },
  created() {
    this.theme = this.getTheme();
    this.lang = this.getLang();
  },
  methods: {
    getTheme() {
      return localStorage.getItem('theme') || 'light';
    },
    setTheme() {
      const currentTheme = this.theme === 'dark' ? theme.dark : theme.light;

      this.$theme.colors = currentTheme;
    },
    switchTheme() {
      const newTheme = this.theme === 'light' ? 'dark' : 'light';
      this.theme = newTheme;
      localStorage.setItem('theme', newTheme);
      this.setTheme();
    },
    getLang() {
      return localStorage.getItem('lang') || 'en';
    },
    setLang({ value }) {
      this.lang = value;
      localStorage.setItem('lang', value);
      bus.$emit('switch-lang', value);
    }
  }
});

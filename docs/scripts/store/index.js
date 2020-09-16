import Vue from 'vue';
import { isDev, themes } from '@/config';
import bus from './bus';
import dev from './dev';
import page from './page';

export default new Vue({
  name: 'Store',
  mixins: [isDev ? dev : {}, page],
  data() {
    return {
      theme: '',
      themeColors: {},
      lang: ''
    };
  },
  created() {
    this.theme = this.getThemeName();
    this.lang = this.getLang();
  },
  methods: {
    getThemeName() {
      return localStorage.getItem('theme') || 'light';
    },
    getTheme() {
      [
        'background',
        'primary',
        'on-primary',
        'secondary',
        'on-secondary',
        'surface',
        'on-surface',
        'error',
        'on-error'
      ].forEach((style) => {
        this.$set(this.themeColors, style, this.$theme.getThemeColor(style));
      });
    },
    setTheme(themeName = this.theme) {
      const themeColors = themes[themeName];

      localStorage.setItem('theme', themeName);
      this.$theme.colors = themeColors;

      this.getTheme();
    },
    switchTheme() {
      const themeName = this.theme === 'dark' ? 'light' : 'dark';

      this.theme = themeName;
      this.setTheme(themeName);
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

import Vue from 'vue';
import { isDev } from '@/config';
import bus from './bus';
import dev from './dev';
import page from './page';

export default new Vue({
  name: 'Store',
  mixins: [isDev ? dev : {}, page],
  data() {
    return {
      lang: ''
    };
  },
  created() {
    this.lang = this.getLang() || 'en';
  },
  methods: {
    getLang() {
      return localStorage.getItem('lang');
    },
    setLang({ value }) {
      this.lang = value;
      localStorage.setItem('lang', value);
      bus.$emit('switch-lang', value);
    }
  }
});

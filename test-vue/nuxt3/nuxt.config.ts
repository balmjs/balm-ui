import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  alias: {
    vue: 'vue/dist/vue.esm-bundler.js',
    'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.esm.js'
  },
  css: ['balm-ui/dist/balm-ui.css'],
  ssr: false // TODO
});

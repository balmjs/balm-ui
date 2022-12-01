// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.esm.js'
  },
  css: ['balm-ui/dist/balm-ui.css'],
  hooks: {
    'vite:extendConfig': (config, { isClient }) => {
      if (isClient) {
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js';
      }
    }
  },
  ssr: false // TODO
});

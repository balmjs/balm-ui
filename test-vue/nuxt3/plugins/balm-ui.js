import { defineNuxtPlugin } from '#app';
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BalmUI);
  nuxtApp.vueApp.use(BalmUIPlus);
});

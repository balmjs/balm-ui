/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'balm-ui-plus' {
  import type { Plugin } from 'vue';
  const BalmUIPlus: Plugin;
  export default BalmUIPlus;
}

import type { DefineComponent, Plugin } from '@vue/runtime-core';

type component = DefineComponent<{}, {}, any>;
type alertDialog = (options: string | object) => Promise<void>;

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $alert: alertDialog;
  }
}

declare module 'balm-ui' {
  const BalmUI: Plugin;

  const UiButton: component;
  const $alert: Plugin;
  const useAlert: () => alertDialog;

  export default BalmUI;
  export { UiButton, $alert, useAlert };
}

export {};

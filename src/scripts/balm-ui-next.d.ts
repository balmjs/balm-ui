import type { DefineComponent, Plugin } from '@vue/runtime-core';

declare module './balm-ui-next' {
  type component = DefineComponent<{}, {}, any>;

  const BalmUINext: Plugin;

  const version: string;
  const install: typeof BalmUINext.install;

  const UiBottomSheet: component;
  const UiNavigationBar: component;
  const UiNavigationRail: component;

  const $lazyload: Plugin;

  export default BalmUINext;
  export { version, install };
  export { UiBottomSheet, UiNavigationBar, UiNavigationRail };
  export { $lazyload };
}

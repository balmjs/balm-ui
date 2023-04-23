import type { DefineComponent, Plugin, Directive } from '@vue/runtime-core';

declare module './balm-ui-plus' {
  type component = DefineComponent<{}, {}, any>;

  const BalmUIPlus: Plugin;

  const version: string;
  const install: typeof BalmUIPlus.install;

  const UiEditor: component;
  const UiSideSheet: component;
  const UiSkeleton: component;
  const UiTree: component;
  const UiTreeNode: component;
  const UiBottomSheet: component;
  const UiNavigationBar: component;
  const UiNavigationRail: component;

  const $lazyload: Plugin;

  const vAnchor: Directive;
  const vCopy: Directive;
  const vLongpress: Directive;

  export default BalmUIPlus;
  export { version, install };
  export {
    UiEditor,
    UiSideSheet,
    UiSkeleton,
    UiTree,
    UiTreeNode,
    UiBottomSheet,
    UiNavigationBar,
    UiNavigationRail
  };
  export { $lazyload };
  export { vAnchor, vCopy, vLongpress };
}

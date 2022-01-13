import type { DefineComponent, Plugin, Directive } from '@vue/runtime-core';

declare module './balm-ui-plus' {
  type component = DefineComponent<{}, {}, any>;

  const BalmUIPlus: Plugin;

  const version: string;
  const install: typeof BalmUIPlus.install;

  const UiAlert: component;
  const UiCollapse: component;
  const UiEditor: component;
  const UiSkeleton: component;
  const UiTree: component;
  const UiTreeNode: component;

  const vAnchor: Directive;
  const vCopy: Directive;
  const vLongpress: Directive;
  const vDebounce: Directive;

  export default BalmUIPlus;
  export { version, install };
  export { UiAlert, UiCollapse, UiEditor, UiSkeleton, UiTree, UiTreeNode };
  export { vAnchor, vCopy, vLongpress, vDebounce };
}

import version from './version';
import autoInstall from './config/auto-install';
/**
 * Components
 */
import UiSkeleton from './components/skeleton/skeleton.vue';
import UiEditor from './components/editor/quill/editor.vue';
import UiTree from './components/tree/tree.vue';
import UiTreeNode from './components/tree/tree-node.vue';
import UiNavigationBar from './components/navigation-bar/navigation-bar.vue';
import UiBottomSheet from './components/bottom-sheet/bottom-sheet.vue';
import UiNavigationRail from './components/navigation-rail/navigation-rail.vue';
import UiSideSheet from './components/side-sheet/side-sheet.vue';
/**
 * Plugins
 */
import $lazyload from './plugins/lazyload';
/**
 * Directives
 */
import vAnchor from './directives/anchor';
import vCopy from './directives/copy';
import vLongpress from './directives/longpress';

const Components = {
  UiEditor,
  UiSideSheet,
  UiSkeleton,
  UiTree,
  UiTreeNode,
  UiBottomSheet,
  UiNavigationBar,
  UiNavigationRail
};

const Plugins = {
  $lazyload
};

const Directives = {
  vAnchor,
  vCopy,
  vLongpress
};

const install = (app, options = {}) =>
  autoInstall(app, options, {
    Components,
    Plugins,
    Directives
  });

const BalmUIPlus = {
  install
};

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

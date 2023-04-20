import version from './version';
import autoInstall from './config/auto-install';
import autoInit from './config/auto-init';
/**
 * Components
 */
import UiSkeleton from './components/skeleton/skeleton.vue';
import UiEditor from './components/editor/editor.vue';
import UiTree from './components/tree/tree.vue';
import UiTreeNode from './components/tree/tree-node.vue';
import UiBottomNavigation from './components/bottom-navigation/bottom-navigation.vue';
import UiBottomSheet from './components/bottom-sheet/bottom-sheet.vue';
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
  UiBottomNavigation,
  UiBottomSheet,
  UiEditor,
  UiSideSheet,
  UiSkeleton,
  UiTree,
  UiTreeNode
};

const Plugins = {
  $lazyload
};

const Directives = {
  vAnchor,
  vCopy,
  vLongpress
};

const install = (Vue, options = {}) =>
  autoInstall(Vue, options, {
    Components,
    Plugins,
    Directives
  });

const BalmUIPlus = {
  version,
  install
};

autoInit(BalmUIPlus);

export default BalmUIPlus;
export { version, install };
export {
  UiBottomNavigation,
  UiBottomSheet,
  UiEditor,
  UiSideSheet,
  UiSkeleton,
  UiTree,
  UiTreeNode
};
export { $lazyload };
export { vAnchor, vCopy, vLongpress };

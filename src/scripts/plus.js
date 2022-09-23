import version from './version';
import autoInstall from './config/auto-install';
import autoInit from './config/auto-init';
/**
 * Components
 */
import UiSkeleton from './components/skeleton/skeleton';
import UiEditor from './components/editor/editor';
import UiTree from './components/tree/tree';
import UiTreeNode from './components/tree/tree-node';
import UiBottomNavigation from './components/bottom-navigation/bottom-navigation';
import UiBottomSheet from './components/bottom-sheet/bottom-sheet';
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
  UiSkeleton,
  UiTree,
  UiTreeNode
};
export { $lazyload };
export { vAnchor, vCopy, vLongpress };

import version from './version';
import autoInstall from './config/auto-install';
import autoInit from './config/auto-init';
/**
 * Components
 */
import UiSkeleton from './components/skeleton/skeleton';
import UiCollapse from './components/collapse/collapse';
import UiEditor from './components/editor/editor';
import UiTree from './components/tree/tree';
import UiTreeNode from './components/tree/tree-node';
/**
 * Directives
 */
import vAnchor from './directives/anchor';
import vCopy from './directives/copy';
import vLongpress from './directives/longpress';
import vDebounce from './directives/debounce';

const Components = {
  UiCollapse,
  UiEditor,
  UiSkeleton,
  UiTree,
  UiTreeNode
};

const Plugins = {};

const Directives = {
  vAnchor,
  vCopy,
  vDebounce,
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
export { UiCollapse, UiEditor, UiSkeleton, UiTree, UiTreeNode };
export { vAnchor, vCopy, vDebounce, vLongpress };

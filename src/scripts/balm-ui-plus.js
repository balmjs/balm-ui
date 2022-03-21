import version from './version';
import autoInstall from './config/auto-install';
/**
 * Components
 */
import UiSkeleton from './components/skeleton/skeleton.vue';
import UiAlert from './components/alert/alert.vue';
import UiCollapse from './components/collapse/collapse.vue';
import UiEditor from './components/editor/quill/editor.vue';
import UiTree from './components/tree/tree.vue';
import UiTreeNode from './components/tree/tree-node.vue';
/**
 * Directives
 */
import vAnchor from './directives/anchor';
import vCopy from './directives/copy';
import vLongpress from './directives/longpress';
import vDebounce from './directives/debounce';

const Components = {
  UiAlert,
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
  vLongpress,
  vDebounce
};

const install = (Vue, options = {}) =>
  autoInstall(Vue, options, {
    Components,
    Plugins,
    Directives
  });

const BalmUIPlus = {
  install
};

export default BalmUIPlus;
export { version, install };
export { UiAlert, UiCollapse, UiEditor, UiSkeleton, UiTree, UiTreeNode };
export { vAnchor, vCopy, vLongpress, vDebounce };

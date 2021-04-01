import version from './version';
import autoInstall from './config/auto-install';
/**
 * Components
 */
import UiAutocomplete from './components/autocomplete/autocomplete.vue';
import UiSkeleton from './components/skeleton/skeleton.vue';
import UiDatepicker from './components/datepicker/datepicker.vue';
import UiRangepicker from './components/rangepicker/rangepicker.vue';
import UiAlert from './components/alert/alert.vue';
import UiCollapse from './components/collapse/collapse.vue';
import UiEditor from './components/editor/editor.vue';
import UiTree from './components/tree/tree.vue';
import UiTreeNode from './components/tree/tree-node.vue';
/**
 * Plugins
 */
import $alert, { useAlert } from './plugins/alert';
import $confirm, { useConfirm } from './plugins/confirm';
import $toast, { useToast } from './plugins/toast';
import $lazyload from './plugins/lazyload';
/**
 * Directives
 */
import vAnchor from './directives/anchor';
import vCopy from './directives/copy';
import vLongpress from './directives/longpress';
import vDebounce from './directives/debounce';
import vDraggable from './directives/draggable';

const Components = {
  UiAlert,
  UiAutocomplete,
  UiCollapse,
  UiDatepicker,
  UiEditor,
  UiRangepicker,
  UiSkeleton,
  UiTree,
  UiTreeNode
};

const Plugins = {
  $alert,
  $confirm,
  $toast,
  $lazyload
};

const Directives = {
  vAnchor,
  vCopy,
  vLongpress,
  vDebounce,
  vDraggable
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

export default BalmUIPlus;
export { version, install };
export {
  UiAlert,
  UiAutocomplete,
  UiCollapse,
  UiDatepicker,
  UiEditor,
  UiRangepicker,
  UiSkeleton,
  UiTree,
  UiTreeNode
};
export { $alert, $confirm, $toast, $lazyload };
export { useAlert, useConfirm, useToast };
export { vAnchor, vCopy, vLongpress, vDebounce, vDraggable };

import version from './version';
import autoInstall from './config/auto-install';
import autoInit from './config/auto-init';
/**
 * Components
 */
import UiAutocomplete from './components/autocomplete/autocomplete';
import UiSkeleton from './components/skeleton/skeleton';
import UiDatepicker from './components/datepicker/datepicker';
import UiRangepicker from './components/rangepicker/rangepicker';
import UiAlert from './components/alert/alert';
import UiCollapse from './components/collapse/collapse';
import UiEditor from './components/editor/editor';
import UiTree from './components/tree/tree';
import UiTreeNode from './components/tree/tree-node';
/**
 * Plugins
 */
import $alert, { useAlert } from './plugins/alert';
import $confirm, { useConfirm } from './plugins/confirm';
import $toast, { useToast } from './plugins/toast';
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
  $toast
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

autoInit(BalmUIPlus);

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
export { $alert, $confirm, $toast };
export { useAlert, useConfirm, useToast };
export { vAnchor, vCopy, vLongpress, vDebounce, vDraggable };

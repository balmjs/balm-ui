import version from './version';
import autoInit from './config/auto-init';
import multiConfigure from './config/multi-configure';
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

const components = {
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

const plugins = {
  $alert,
  $confirm,
  $toast
};

const directives = {
  vAnchor
};

function install(Vue, options = {}) {
  // Configure the components' props
  multiConfigure(components, options);

  // Install the components
  for (let key in components) {
    let Component = components[key];
    Vue.component(Component.name, Component);
  }

  // Install the plugins
  for (let key in plugins) {
    let Plugin = plugins[key];
    if (options[key]) {
      Vue.use(Plugin, options[key]);
    } else {
      Vue.use(Plugin);
    }
  }

  // Init the directives
  for (let key in directives) {
    let Directive = directives[key];
    Vue.directive(Directive.name, Directive);
  }
}

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
export { vAnchor };

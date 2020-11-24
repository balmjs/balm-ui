import packageJson from '../../package.json';
import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
import UiAutocomplete from './components/input-controls/autocomplete';
import UiSkeleton from './components/others/skeleton';
import UiDatepicker from './components/pickers/datepicker';
import UiRangepicker from './components/pickers/rangepicker';
import UiAlert from './components/others/alert';
import UiCollapse from './components/others/collapse';
import UiEditor from './components/editor/editor';
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

const version = packageJson.version;

const components = {
  UiAlert,
  UiAutocomplete,
  UiCollapse,
  UiDatepicker,
  UiEditor,
  UiRangepicker,
  UiSkeleton
};

const plugins = {
  $alert,
  $confirm,
  $toast
};

const directives = {
  vAnchor
};

const BalmUIPlus = {
  version,
  install(Vue, options = {}) {
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
};

autoInstall(BalmUIPlus);

export default BalmUIPlus;
export {
  UiAlert,
  UiAutocomplete,
  UiCollapse,
  UiDatepicker,
  UiEditor,
  UiRangepicker,
  UiSkeleton
};
export { $alert, $confirm, $toast };
export { useAlert, useConfirm, useToast };
export { vAnchor };

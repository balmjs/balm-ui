import version from './version';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
import UiAutocomplete from './components/input-controls/autocomplete.vue';
import UiSkeleton from './components/others/skeleton.vue';
import UiDatepicker from './components/pickers/datepicker.vue';
import UiRangepicker from './components/pickers/rangepicker.vue';
import UiAlert from './components/others/alert.vue';
import UiCollapse from './components/others/collapse.vue';
import UiEditor from './components/editor/editor.vue';
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

function install(app, options = {}) {
  // Configure the components' props
  multiConfigure(components, options);

  // Install the components
  for (let key in components) {
    let Component = components[key];
    app.component(Component.name, Component);
  }

  // Install the plugins
  for (let key in plugins) {
    let Plugin = plugins[key];
    if (options[key]) {
      app.use(Plugin, options[key]);
    } else {
      app.use(Plugin);
    }
  }

  // Init the directives
  for (let key in directives) {
    let Directive = directives[key];
    app.directive(Directive.name, Directive);
  }
}

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
  UiSkeleton
};
export { $alert, $confirm, $toast };
export { useAlert, useConfirm, useToast };
export { vAnchor };

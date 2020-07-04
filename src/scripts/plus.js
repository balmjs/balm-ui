import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
import UiAutocomplete from './components/input-controls/autocomplete';
import UiTextDivider from './components/dividers/text-divider';
import UiSkeleton from './components/others/skeleton';
import UiDatepicker from './components/pickers/datepicker';
import UiRangepicker from './components/pickers/rangepicker';
import UiAlert from './components/others/alert';
import UiCollapse from './components/others/collapse';
import UiEditor from './components/input-controls/editor';
/**
 * Plugins
 */
import alert from './plugins/alert';
import confirm from './plugins/confirm';
import toast from './plugins/toast';
/**
 * Directives
 */
import vAnchor from './directives/anchor';

const version = require('../../package.json').version;

const components = {
  UiAlert,
  UiAutocomplete,
  UiCollapse,
  UiDatepicker,
  UiEditor,
  UiRangepicker,
  UiSkeleton,
  UiTextDivider
};

const plugins = {
  alert,
  confirm,
  toast
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

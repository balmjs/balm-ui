import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
import UiFile from './components/input-controls/file';
import UiAutocomplete from './components/input-controls/autocomplete';
import UiPagination from './components/data-tables/pagination';
import UiTextDivider from './components/dividers/text-divider';
import UiSkeleton from './components/others/skeleton';
import UiDatepicker from './components/pickers/datepicker';
import UiRangepicker from './components/pickers/rangepicker';
import UiAlert from './components/others/alert';
import UiCollapse from './components/others/collapse';
import UiBadge from './components/others/badge';
/**
 * Plugins
 */
import validator from './plugins/validator';
import alert from './plugins/alert';
import confirm from './plugins/confirm';
import toast from './plugins/toast';
/**
 * Directives
 */
import vAnchor from './directives/anchor';
import vBadge from './directives/badge';
/**
 * Utilities
 */
import types from './utils/types';
import helpers from './utils/helpers';
import detectIE from './utils/ie';

const version = require('../../package.json').version;

const components = {
  UiAlert,
  UiAutocomplete,
  UiBadge,
  UiCollapse,
  UiDatepicker,
  UiFile,
  UiPagination,
  UiRangepicker,
  UiSkeleton,
  UiTextDivider
};

const plugins = {
  alert,
  confirm,
  toast,
  validator
};

const directives = {
  vAnchor,
  vBadge
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
export { types, helpers, detectIE };

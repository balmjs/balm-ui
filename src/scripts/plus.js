import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
import UiDropdown from './components/input-controls/dropdown';
import UiAutocomplete from './components/input-controls/autocomplete';
/**
 * Plugins
 */
import validator from './plugins/validator';
import alert from './plugins/alert';
import confirm from './plugins/confirm';
import toast from './plugins/toast';
/**
 * Utilities
 */
import * as utils from './utils';

const version = require('../../package.json').version;

const components = {
  UiDropdown,
  UiAutocomplete
};

const plugins = {
  validator,
  alert,
  confirm,
  toast
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
  }
};

autoInstall(BalmUIPlus);

export default BalmUIPlus;
export { utils };

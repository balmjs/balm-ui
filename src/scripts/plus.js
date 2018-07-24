import autoInstall from './config/auto-install';
/**
 * Plugins
 */
import validator from './plugins/validator';
import alert from './plugins/alert';
// import confirm from './plugins/confirm';
import toast from './plugins/toast';
/**
 * Utilities
 */
import * as utils from './utils';

const version = require('../../package.json').version;

const plugins = {
  validator,
  alert,
  // confirm,
  toast
};

const BalmUIPlus = {
  version,
  install(Vue, options = {}) {
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

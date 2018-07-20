import autoInstall from './config/auto-install';
/**
 * Plugins
 */
import validator from './plugins/validator';
// import alert from './plugins/alert';
// import confirm from './plugins/confirm';
// import prompt from './plugins/prompt';
import toast from './plugins/toast';
/**
 * Utilities
 */
import * as utils from './utils';

const version = require('../../package.json').version;

const plugins = {
  validator,
  // alert,
  // confirm,
  // prompt,
  toast
};

const BalmUIPlus = {
  install(Vue, options = {}) {
    Vue.BalmUIVersion = version;

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
export {
  utils
};

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

const registers = {
  install(Vue, options = {}) {
    // Install the plugins
    for (let key in BalmUIPlus.plugins) {
      let Plugin = BalmUIPlus.plugins[key];
      if (options[key]) {
        Vue.use(Plugin, options[key]);
      } else {
        Vue.use(Plugin);
      }
    }
  }
};

const BalmUIPlus = Object.assign({}, {
    version
  }, {
    plugins
  }, {
    utils
  },
  registers
);

autoInstall(BalmUIPlus);

export default BalmUIPlus;
export {
  utils
};

import * as helpers from '../helpers';

export default {
  install(Vue) {
    Vue.prototype.helpers = Object.assign({}, helpers);
  }
};

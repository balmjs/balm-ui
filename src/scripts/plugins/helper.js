import * as helpers from '../helpers';

export default {
  install(Vue) {
    Vue.prototype.balmHelper = Object.assign({}, helpers);
  }
};

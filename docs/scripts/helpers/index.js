import Vue from 'vue';
import BalmUI from '../../../src/scripts/balm-ui';

let helpers = Object.assign({}, BalmUI.helpers);

// yours helpers

Vue.prototype.helpers = helpers;

export default helpers;

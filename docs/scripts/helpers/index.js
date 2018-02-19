import Vue from 'vue';
import BalmUI from '../../../src/scripts/index';

let helpers = Object.assign({}, BalmUI.helpers);

// yours helpers

Vue.prototype.helpers = helpers;

export default helpers;

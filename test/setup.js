// setup JSDOM
require('jsdom-global')();

const {
  mount,
  shallowMount,
  createLocalVue,
  createWrapper,
  config
} = require('@vue/test-utils');
// const { render, renderToString } = require('@vue/server-test-utils');

// make available globally
global.DEBUG = false;
global.expect = require('expect');
global.mount = mount;
global.shallowMount = shallowMount;
// global.render = render;
// global.renderToString = renderToString;
global.sinon = require('sinon');

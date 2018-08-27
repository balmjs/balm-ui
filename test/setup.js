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
global.expect = require('expect');
global.shallowMount = shallowMount;
// global.render = render;
// global.renderToString = renderToString;

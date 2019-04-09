// from @vue/cli-plugin-unit-mocha/setup.js
require('jsdom-global')(undefined, {
  pretendToBeVisual: true,
  url: 'http://localhost'
});

// https://github.com/vuejs/vue-test-utils/issues/936
// better fix for "TypeError: Super expression must either be null or
// a function" than pinning an old version of prettier.
window.Date = Date;

// require('./requestanimationframe');

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

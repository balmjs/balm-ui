const env = require('../env');
require('../mdc/update');

let afterTask;

if (env.updateMDC) {
  afterTask = 'update:mdc';
}
if (env.updateMDI) {
  afterTask = 'update:mdi';
}
if (env.updateMDIJson) {
  afterTask = 'update:mdi:json';
}

module.exports = afterTask;

const env = require('../env');
const { updateMDITask, updateMDIJson } = require('../mdc/update');

let afterTask = null;

if (env.updateMDI) {
  afterTask = updateMDITask;
} else if (env.updateMDIJson) {
  afterTask = updateMDIJson;
}

module.exports = afterTask;

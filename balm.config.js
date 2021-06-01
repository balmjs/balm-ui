const getConfig = require('./config/balm');
const afterTask = require('./config/balm/after-task');
const api = require('./config/balm/api');

module.exports = (balm) => {
  return {
    config: getConfig(balm),
    afterTask,
    api
  };
};

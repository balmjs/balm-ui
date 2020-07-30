const getConfig = require('./config/balmrc');
const afterTask = require('./config/balm.after-task');
const api = require('./config/balm.api');

module.exports = (balm) => {
  return {
    config: getConfig(balm),
    afterTask,
    api
  };
};

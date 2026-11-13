const getConfig = require('./config/balm');
const recipes = require('./config/balm/api');
const afterTask = require('./config/balm/after-task');

module.exports = (balm) => ({
  config: getConfig(balm),
  recipes,
  afterTask
});

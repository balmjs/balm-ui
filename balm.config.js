const balm = require('balm').default || require('balm');
const getConfig = require('./config/balm');
const recipes = require('./config/balm/api');

module.exports = {
  config: getConfig(balm),
  recipes
};

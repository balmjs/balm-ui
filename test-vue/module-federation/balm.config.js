const config = require('./config/balmrc');
const publish = require('./config/balm.publish');

const api = (mix) => {
  publish(mix);
};

module.exports = () => {
  return {
    config,
    api
  };
};

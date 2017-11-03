var balm = require('balm');
var balmConfig = require('./config/balmrc');
var env = require('./config/env');
var constants = require('./config/constants');

balm.config = balmConfig;

balm.go(function(mix) {
  if (env.buildDocs) {
    mix.copy('./docs/data/*', './dist/data');
  } else {
    if (env.useDefault) {
      if (balm.config.production) {
        mix.remove('./dist/font/*.css');
      }
      if (env.buildComponents) {
        mix.remove(['./components/font', './components/balm-ui.css']);
      }
    } else {
      // clear
      mix.remove([constants.DEV_SOURCE.mdc + '/*', constants.DEV_SOURCE.font + '/*']);
      // get Material
      mix.copy(constants.DMC_SOURCE.mdc + '/material-components-web.scss', constants.DEV_SOURCE.mdc);
      constants.DMC_COMPONENTS.forEach(function(item) {
        mix.copy(constants.DMC_SOURCE.material + '/' + item + '/**/{*.scss,*.js}', constants.DEV_SOURCE.mdc + '/' + item);
        mix.remove(constants.DEV_SOURCE.mdc + '/' + item + '/dist');
        mix.remove(constants.DEV_SOURCE.mdc + '/' + item + '/node_modules');
      });
      // get Material Icons
      mix.copy(constants.DMC_SOURCE.icon + '/iconfont/*.{css,eot,svg,ttf,woff,woff2}', constants.DEV_SOURCE.font);
    }
  }
});

var balm = require('balm');
var balmConfig = require('./config/balmrc');
var env = require('./config/env');
var constants = require('./config/constants');
var individual = require('./config/individual');

balm.config = balmConfig;

balm.go(function(mix) {
  if (env.buildDocs) {
    mix.copy('./docs/data/*', './dist/data');
  } else {
    if (env.updateMDC) {
      // clear
      mix.remove([
        constants.DEV_SOURCE.mdc + '/*',
        constants.DEV_SOURCE.font + '/*'
      ]);

      // get Material
      mix.copy(
        constants.DMC_SOURCE.mdc + '/material-components-web.scss',
        constants.DEV_SOURCE.mdc
      );
      constants.DMC_COMPONENTS.forEach(function(item) {
        mix.copy(
          constants.DMC_SOURCE.material + '/' + item + '/**/{*.scss,*.js}',
          constants.DEV_SOURCE.mdc + '/' + item
        );
        mix.remove(constants.DEV_SOURCE.mdc + '/' + item + '/dist');
        mix.remove(constants.DEV_SOURCE.mdc + '/' + item + '/node_modules');
      });

      // get Material Icons
      mix.copy(
        constants.DMC_SOURCE.icon + '/iconfont/*.{css,eot,svg,ttf,woff,woff2}',
        constants.DEV_SOURCE.font
      );
    } else {
      if (balm.config.production) {
        mix.remove('./dist/font/*.css');

        // clear individual
        mix.remove([
          individual.output.components,
          individual.output.helpers,
          individual.output.plugins
        ]);

        // build individual
        let components = individual.components.map(item => {
          return individual.input.components + '/' + item;
        });
        mix.js(components, individual.output.components);

        let helpers = individual.helpers.map(item => {
          return individual.input.helpers + '/' + item;
        });
        mix.js(helpers, individual.output.helpers);

        let plugins = individual.plugins.map(item => {
          return individual.input.plugins + '/' + item;
        });
        mix.js(plugins, individual.output.plugins);

        mix.copy(['./dist/css/*.css', './dist/js/*.js'], './dist');
        mix.copy('./dist/css/components/*', './components');
        mix.copy('./dist/css/plugins/*', './plugins');
        mix.copy('./dist/font/*', './font');
        mix.remove(['./dist/css', './dist/js', './dist/font']);
      }
    }
  }
});

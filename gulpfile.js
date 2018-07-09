var balm = require('balm');
var balmConfig = require('./config/balmrc');
var env = require('./config/env');
var constants = require('./config/constants');
var individual = require('./config/individual');
require('./config/update');

balm.config = balmConfig;
balm.afterTask = 'update:mdc';

balm.go(function (mix) {
  if (env.buildDocs) {
    mix.copy('./docs/data/*', './dist/data');
    mix.remove('./dist/img/photos');
  } else {
    if (env.updateMDC) {
      // clear
      mix.remove([
        constants.DEV_SOURCE.mdc + '/*',
        constants.DEV_SOURCE.font + '/*'
      ]);

      // update css reset for docs
      mix.copy(constants.CSS_RESET, './docs/styles/global', {
        prefix: '_',
        extname: '.scss'
      });

      // get Material
      mix.copy(
        constants.DMC_SOURCE.mdc + '/material-components-web.scss',
        constants.DEV_SOURCE.mdc
      );
      constants.DMC_COMPONENTS.forEach(function (item) {
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
          individual.output.utilities,
          individual.output.plugins
        ]);

        // build individual
        const individualBuild = ['components', 'plugins', 'utilities']; // , 'directives'
        individualBuild.forEach(buildName => {
          let buildFiles = individual[buildName].map(item => {
            return individual.input[buildName] + '/' + item;
          });
          mix.js(buildFiles, individual.output[buildName]);
        });

        mix.copy(['./dist/css/*.css', './dist/js/*.js'], './dist');
        mix.copy('./dist/css/components/*', './components');
        mix.copy('./dist/css/plugins/*', './plugins');
        mix.copy('./dist/font/*', './font');
        mix.remove(['./dist/css', './dist/js', './dist/font']);
      }
    }
  }
});

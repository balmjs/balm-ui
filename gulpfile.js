const balm = require('balm');
const balmConfig = require('./config/balmrc');
const env = require('./config/env');
const constants = require('./config/constants');
const individual = require('./config/individual');
require('./config/update');

balm.config = balmConfig;
if (env.updateMDC) {
  balm.afterTask = 'update:mdc';
}
if (env.updateMDI) {
  balm.afterTask = 'update:mdi';
}

balm.go(mix => {
  if (env.buildDocs) {
    mix.copy('./docs/data/*', './dist/data');
    mix.remove([
      './dist/img/photos',
      './dist/font/materialicons',
      './dist/rev-manifest.json',
      './dist/service-worker.js'
    ]);
  } else {
    if (env.updateMDC) {
      // Clear
      mix.remove([`${constants.DEV_SOURCE.mdc}/*`]);

      // Update css reset for docs
      mix.copy(constants.CSS_RESET.normalize, './docs/styles/global', {
        rename: {
          prefix: '_',
          extname: '.scss'
        }
      });
      mix.copy(constants.CSS_RESET.sanitize, './docs/styles/global', {
        rename: {
          prefix: '_',
          extname: '.scss'
        }
      });

      // Get Material Components Web
      mix.copy(
        `${constants.DMC_SOURCE.mdc}/material-components-web.scss`,
        constants.DEV_SOURCE.mdc
      );
      constants.DMC_COMPONENTS.forEach(item => {
        mix.copy(
          `${constants.DMC_SOURCE.material}/${item}/**/{*.scss,*.js}`,
          `${constants.DEV_SOURCE.mdc}/${item}`
        );
        mix.remove([
          `${constants.DEV_SOURCE.mdc}/${item}/dist`,
          `${constants.DEV_SOURCE.mdc}/${item}/node_modules`
        ]);
      });

      // Get Material Icons (Deprecated)
      // mix.copy(
      //   `${constants.DMC_SOURCE.icon}/*.{css,eot,woff2,woff,ttf}`,
      //   constants.DEV_SOURCE.mdi
      // );
    } else {
      if (mix.env.isProd) {
        // Clear individual
        mix.remove([
          individual.output.components,
          individual.output.plugins,
          individual.output.directives,
          individual.output.utils
        ]);

        // Build individual
        const individualBuild = [
          'components',
          'plugins',
          'directives',
          'utils'
        ];
        individualBuild.forEach(buildName => {
          // let buildFiles = individual[buildName].map(item => {
          //   return `${individual.input[buildName]}/${item}`;
          // });
          // mix.js(buildFiles, individual.output[buildName]);
          individual[buildName].forEach(async item => {
            await mix.js(
              [`${individual.input[buildName]}/${item}`],
              individual.output[buildName],
              {
                output: {
                  library: 'BalmUI_' + item.split('.')[0]
                }
              }
            );
          });
        });

        mix.copy(['./dist/css/*.css', './dist/js/*.js'], './dist');
        mix.copy('./dist/css/components/*', './components');
        mix.copy('./dist/css/plugins/*', './plugins');
        mix.copy('./dist/css/directives/*', './directives');
        mix.remove(['./dist/css', './dist/js']);

        mix.copy('./src/material-design-icons/latest/*', './fonts');
      }
    }
  }
});

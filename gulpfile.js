const fs = require('fs');
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
if (env.updateMDIJson) {
  balm.afterTask = 'update:mdi:json';
}

balm.go((mix) => {
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

      // Get Material Components Web
      mix.copy(
        `${constants.DMC_SOURCE.mdc}/material-components-web.scss`,
        constants.DEV_SOURCE.mdc
      );
      constants.DMC_COMPONENTS.forEach((item) => {
        mix.copy(
          `${constants.DMC_SOURCE.material}/${item}/**/{*.scss,*.js}`,
          `${constants.DEV_SOURCE.mdc}/${item}`
        );
        mix.remove([
          `${constants.DEV_SOURCE.mdc}/${item}/dist`,
          `${constants.DEV_SOURCE.mdc}/${item}/test`
        ]);
      });
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
        const uiOutput = `${individual.output.dist}/css/balm-ui`;
        individualBuild.forEach((buildName) => {
          individual[buildName].forEach((item) => {
            let jsInput =
              buildName === 'utils'
                ? [`${individual.input[buildName]}/${item}.js`]
                : {
                    index: `${individual.input[buildName]}/${item}.js`
                  };
            let jsOutput =
              buildName === 'utils'
                ? `${uiOutput}/${buildName}`
                : `${uiOutput}/${buildName}/${item}`;

            mix.js(jsInput, jsOutput, {
              output: {
                library: 'BalmUI_' + item
              }
            });

            let sassFolder = `${individual.input.sass}/balm-ui/${buildName}`;
            if (fs.existsSync(sassFolder)) {
              mix.copy(`${sassFolder}/**/*`, `${uiOutput}/${buildName}`);
            }
          });
        });

        individualBuild.forEach((buildName) => {
          mix.copy(`${uiOutput}/${buildName}/**/*`, buildName);
        });

        mix.copy(['./dist/css/*.css', './dist/js/*.js'], './dist');
        mix.remove(['./dist/css', './dist/js']);

        // For sass entry
        mix.copy(`${individual.input.sass}/*.scss`, './dist');

        // For fonts
        mix.copy('./src/material-icons/*', './fonts'); // NOTE: manual zip fonts & rename to `material-icons.zip`

        // For example
        mix.copy('./src/material-icons/*', './components/fonts');
      }
    }
  }
});

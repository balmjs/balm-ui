const env = require('./env');
const constants = require('./constants');
const individual = require('./individual');
const buildIndividual = require('./build.individual');
const fixGridCss = require('./build.fix');

module.exports = (mix) => {
  if (env.buildDocs) {
    mix.copy('./docs/data/*', './dist/data');
    mix.copy('./docs/images/demo/**/*', './dist/images/demo');
    mix.remove([
      './dist/img/demo',
      './dist/font/materialicons',
      './dist/data/json.txt',
      './dist/data/txt.json',
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
      mix.remove([
        `${constants.DEV_SOURCE.mdc}/chips/deprecated/test`,
        `${constants.DEV_SOURCE.mdc}/chips/deprecated/trailingaction/test`,
        `${constants.DEV_SOURCE.mdc}/switch/deprecated/test`
      ]);
    } else {
      if (mix.env.isProd) {
        buildIndividual(mix);

        // For sass entry
        mix.copy(`${individual.input.sass}/*.scss`, individual.output.dist);

        // For fonts
        mix.copy('./src/material-icons/*', './fonts'); // NOTE: manual zip fonts & rename to `material-icons.zip`

        // For example
        mix.copy('./src/material-icons/*', './components/fonts');

        // Fix `grid` css bug for cssnano
        fixGridCss(mix);
      } else {
        mix.copy('./src/material-icons/*', './docs/fonts'); // For new fonts updated
        // Test PWA for local
        // const workboxSw = 'node_modules/workbox-sw/build/workbox-sw.js';
        // mix.copy(workboxSw, '.tmp');
        // mix.injectManifest();
      }
    }
  }
};

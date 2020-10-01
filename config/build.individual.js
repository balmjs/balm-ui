const fs = require('fs');
const individual = require('./individual');

const NAMESPACE = 'BalmUI';
const individualBuild = ['components', 'plugins', 'directives', 'utils'];

function buildIndividual(mix) {
  // Build plus & next
  mix.js(
    {
      'balm-ui-plus': './src/scripts/plus.js'
    },
    individual.output.dist,
    {
      output: {
        library: `${NAMESPACE}Plus`
      }
    }
  );
  mix.js(
    {
      'balm-ui-next': './src/scripts/next.js'
    },
    individual.output.dist,
    {
      output: {
        library: `${NAMESPACE}Next`
      }
    }
  );

  // Clear individual
  mix.remove([
    individual.output.components,
    individual.output.plugins,
    individual.output.directives,
    individual.output.utils
  ]);

  const uiOutput = `${individual.output.dist}/css/balm-ui`;
  individualBuild.forEach((buildName) => {
    let type;

    switch (buildName) {
      case 'components':
        type = 'Ui';
        break;
      case 'directives':
        type = 'v';
        break;
      default:
        type = '';
    }

    individual[buildName].forEach((item) => {
      const library = `${type}${item.replace(/^\S/, (s) => s.toUpperCase())}`;

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
          library,
          libraryExport: 'default'
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

  mix.copy(['./dist/css/*.css', './dist/js/*.js'], individual.output.dist);
  mix.remove(['./dist/css', './dist/js']);
}

module.exports = buildIndividual;

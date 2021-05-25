const fs = require('fs');
const individual = require('./individual');

const NAMESPACE = 'BalmUI';
const individualBuild = ['components', 'plugins', 'directives', 'utils'];

function getComponentName(item) {
  return item
    .split('-')
    .map((name) => name.replace(/^\S/, (s) => s.toUpperCase()))
    .join('');
}

function getLibrary(buildName, item) {
  let library;

  switch (buildName) {
    case 'components':
      library = `Ui${getComponentName(item)}`;
      break;
    case 'plugins':
      library = `$${item}`;
      break;
    case 'directives':
      library = `v${item.replace(/^\S/, (s) => s.toUpperCase())}`;
      break;
    default:
      library = item;
  }

  console.log(`library: ${library}`);

  return library;
}

function buildIndividual(mix) {
  console.log('Individual libraries:');

  // Build plus & next
  mix.webpack(
    {
      'balm-ui-plus': './src/scripts/plus.js'
    },
    individual.output.dist,
    {
      output: {
        library: {
          name: `${NAMESPACE}Plus`,
          type: 'umd',
          umdNamedDefine: true
        }
      }
    }
  );
  mix.webpack(
    {
      'balm-ui-next': './src/scripts/next.js'
    },
    individual.output.dist,
    {
      output: {
        library: {
          name: `${NAMESPACE}Next`,
          type: 'umd',
          umdNamedDefine: true
        }
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
    individual[buildName].forEach((item) => {
      const libraryName = getLibrary(buildName, item);

      let jsInput;
      switch (buildName) {
        case 'utils':
          jsInput = [`${individual.input[buildName]}/${item}.js`];
          break;
        case 'components':
          jsInput = {
            index: `${individual.input[buildName]}/${item}/index.js`
          };
          break;
        default:
          jsInput = {
            index: `${individual.input[buildName]}/${item}.js`
          };
      }
      let jsOutput =
        buildName === 'utils'
          ? `${uiOutput}/${buildName}`
          : `${uiOutput}/${buildName}/${item}`;

      mix.webpack(jsInput, jsOutput, {
        output:
          buildName === 'plugins' || (buildName === 'utils' && item !== 'ie')
            ? {
                library: {
                  name: libraryName,
                  type: 'umd',
                  umdNamedDefine: true
                }
              }
            : {
                library: {
                  name: libraryName,
                  type: 'umd',
                  export: 'default',
                  umdNamedDefine: true
                }
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

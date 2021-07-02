const fs = require('fs');
const config = require('./config');

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
    config.output.dist,
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
    config.output.dist,
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
    config.output.components,
    config.output.plugins,
    config.output.directives,
    config.output.utils
  ]);

  const uiOutput = `${config.output.dist}/css/balm-ui`;
  individualBuild.forEach((buildName) => {
    config[buildName].forEach((item) => {
      const libraryName = getLibrary(buildName, item);

      let jsInput;
      switch (buildName) {
        case 'utils':
          jsInput = [`${config.input[buildName]}/${item}.js`];
          break;
        case 'components':
          jsInput = {
            index: `${config.input[buildName]}/${item}/index.js`
          };
          break;
        default:
          jsInput = {
            index: `${config.input[buildName]}/${item}.js`
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

      let sassFolder = `${config.input.sass}/balm-ui/${buildName}`;
      if (fs.existsSync(sassFolder)) {
        mix.copy(`${sassFolder}/**/*`, `${uiOutput}/${buildName}`);
      }
    });
  });

  individualBuild.forEach((buildName) => {
    mix.copy(`${uiOutput}/${buildName}/**/*`, buildName);
  });

  mix.copy(['./dist/css/*.css', './dist/js/*.js'], config.output.dist);
  mix.remove(['./dist/css', './dist/js']);
}

module.exports = buildIndividual;

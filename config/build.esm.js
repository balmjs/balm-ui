const pkg = require('../package.json');
const alias = require('@rollup/plugin-alias');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const { babel } = require('@rollup/plugin-babel');
const json = require('@rollup/plugin-json');
const vue = require('rollup-plugin-vue');
const individual = require('./individual');

const banner =
  '/*!\n' +
  ` * BalmUI v${pkg.version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} N.Elf-mousE\n` +
  ' * Released under the MIT License.\n' +
  ' */';

const baseConfig = {
  plugins: {
    preVue: [
      nodeResolve({
        browser: true,
        extensions: ['.js', '.json', '.vue']
      }),
      alias({
        entries: [
          {
            find: 'vue',
            replacement: 'node_modules/vue/dist/vue.esm-bundler.js'
          }
        ]
      })
    ],
    vue: {
      target: 'browser'
    },
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.vue'],
      babelHelpers: 'runtime',
      presets: [['@babel/preset-env', { modules: false }]]
    },
    replace: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
    }
  }
};

const plugins = [
  replace(baseConfig.plugins.replace),
  ...baseConfig.plugins.preVue,
  vue(baseConfig.plugins.vue),
  babel(baseConfig.plugins.babel),
  commonjs(),
  json()
];

const buildESLibraries = {
  index: 'balm-ui',
  plus: 'balm-ui-plus'
  // next: 'balm-ui-next'
};

const external = ['vue'];

function buildESModule(mix) {
  Object.keys(buildESLibraries).forEach((key) => {
    const value = `${buildESLibraries[key]}.esm`;
    console.log(`build ${value} library`);

    mix.rollup(
      {
        external,
        input: `./src/scripts/${key}.js`,
        plugins
      },
      {
        file: `${individual.output.dist}/${value}.js`,
        format: 'es',
        banner
      }
    );
  });
}

module.exports = buildESModule;

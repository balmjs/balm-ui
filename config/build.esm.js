const pkg = require('../package.json');
const path = require('path');
const alias = require('@rollup/plugin-alias');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const { babel } = require('@rollup/plugin-babel');
const json = require('@rollup/plugin-json');
const vue = require('rollup-plugin-vue');
const individual = require('./individual');
const aliases = require('./alias');

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
        extensions: ['.js', '.vue']
      }),
      alias(aliases)
    ],
    replace: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
    },
    vue: {
      target: 'browser'
    },
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.vue'],
      babelHelpers: 'runtime',
      configFile: path.resolve(__dirname, '..', 'babel.config.js')
    }
  }
};

const external = ['vue'];
const globals = { vue: 'Vue' };

function buildESModule(mix) {
  mix.rollup(
    {
      external,
      input: './src/scripts/index.js',
      plugins: [
        json(),
        replace(baseConfig.plugins.replace),
        ...baseConfig.plugins.preVue,
        vue(baseConfig.plugins.vue),
        babel(baseConfig.plugins.babel),
        commonjs()
      ]
    },
    [
      {
        file: `${individual.output.dist}/balm-ui.cjs.js`,
        format: 'cjs',
        exports: 'named',
        globals,
        banner
      },
      {
        file: `${individual.output.dist}/balm-ui.esm.js`,
        format: 'es',
        banner
      }
    ]
  );

  // mix.rollup(
  //   {
  //     input: './src/scripts/plus.js',
  //     plugins: [VuePlugin()]
  //   },
  //   [
  //     {
  //       file: `${individual.output.dist}/balm-ui-plus.cjs.js`,
  //       format: 'cjs',
  //       exports: 'auto',
  //       banner
  //     },
  //     {
  //       file: `${individual.output.dist}/balm-ui-plus.esm.js`,
  //       format: 'es',
  //       banner
  //     }
  //   ]
  // );

  // mix.rollup(
  //   {
  //     input: './src/scripts/next.js',
  //     plugins: [VuePlugin()]
  //   },
  //   [
  //     {
  //       file: `${individual.output.dist}/balm-ui-next.cjs.js`,
  //       format: 'cjs',
  //       exports: 'auto',
  //       banner
  //     },
  //     {
  //       file: `${individual.output.dist}/balm-ui-next.esm.js`,
  //       format: 'es',
  //       banner
  //     }
  //   ]
  // );
}

module.exports = buildESModule;

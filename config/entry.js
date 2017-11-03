var env = require('./env');

var entry = env.useDocs ? {
  mylib: [
    'vue',
    'vue-router',
    'axios',
    'vue-i18n',
    'prismCss',
    'prismjs',
    'clipboard'
  ],
  main: './docs/scripts/main.js'
} : {
  'balm-ui': './src/scripts/balm-ui.js'
};

if (env.buildComponents) {
  entry = {
    'button': './src/scripts/components/button.js',
    'fab': './src/scripts/components/fab.js',
    'icon-toggle': './src/scripts/components/icon-toggle.js'
  };
}

module.exports = entry;

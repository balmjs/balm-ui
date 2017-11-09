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
    'card': './src/scripts/components/card.js',
    'checkbox': './src/scripts/components/checkbox.js',
    'dialog': './src/scripts/components/dialog.js',
    'drawer': './src/scripts/components/drawer.js',
    'fab': './src/scripts/components/fab.js',
    'form-field': './src/scripts/components/form-field.js',
    'grid-list': './src/scripts/components/grid-list.js',
    'grid': './src/scripts/components/grid.js',
    'icon-toggle': './src/scripts/components/icon-toggle.js',
    'icon': './src/scripts/components/icon.js',
    'linear-progress': './src/scripts/components/linear-progress.js',
    'link': './src/scripts/components/link.js',
    'list': './src/scripts/components/list.js',
    'menu': './src/scripts/components/menu.js',
    'radio': './src/scripts/components/radio.js',
    'select': './src/scripts/components/select.js',
    'slider': './src/scripts/components/slider.js',
    'snackbar': './src/scripts/components/snackbar.js',
    'switch': './src/scripts/components/switch.js',
    'tabs': './src/scripts/components/tabs.js',
    'textfield': './src/scripts/components/textfield.js',
    'toolbar': './src/scripts/components/toolbar.js',
  };
}

module.exports = entry;

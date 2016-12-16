var balm = require('balm');

balm.config = {
  roots: {
    source: 'src'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'templates',
      img: 'images',
      font: 'fonts'
    }
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: {
      main: balm.config.production ? './src/index.js' : './src/templates/main.js'
    },
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }],
    alias: {
      'mdlComponentHandler': 'material-design-lite/src/mdlComponentHandler.js',
      'mdlButton': 'material-design-lite/src/button/button.js',
      'mdlCheckbox': 'material-design-lite/src/checkbox/checkbox.js',
      'mdlDataTable': 'material-design-lite/src/data-table/data-table.js',
      'mdlIconToggle': 'material-design-lite/src/icon-toggle/icon-toggle.js',
      'mdlLayout': 'material-design-lite/src/layout/layout.js',
      'mdlMenu': 'material-design-lite/src/menu/menu.js',
      'mdlProgress': 'material-design-lite/src/progress/progress.js',
      'mdlRadio': 'material-design-lite/src/radio/radio.js',
      'mdlRipple': 'material-design-lite/src/ripple/ripple.js',
      'mdlSlider': 'material-design-lite/src/slider/slider.js',
      'mdlSnackbar': 'material-design-lite/src/snackbar/snackbar.js',
      'mdlSpinner': 'material-design-lite/src/spinner/spinner.js',
      'mdlSwitch': 'material-design-lite/src/switch/switch.js',
      // 'mdlTabs': 'material-design-lite/src/tabs/tabs.js',
      'mdlTextfield': 'material-design-lite/src/textfield/textfield.js',
      'mdlTooltip': 'material-design-lite/src/tooltip/tooltip.js'
    },
    eslint: true
  }
};

balm.go(function(mix) {
  if (balm.config.production) {
    mix.remove('./dist/index.html');
  }
});

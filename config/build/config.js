const input = {
  components: './src/scripts/components',
  plugins: './src/scripts/plugins',
  directives: './src/scripts/directives',
  utils: './src/scripts/utils',
  sass: './src/styles'
};

const components = [
  // MDC
  'alert',
  'autocomplete',
  'badge',
  'banner',
  'button',
  'card',
  'checkbox',
  'chips',
  'collapse',
  'datepicker',
  'dialog',
  'divider',
  'drawer',
  'fab',
  'file',
  'form',
  'form-field',
  'grid',
  'icon',
  'icon-button',
  'image-list',
  'list',
  'menu',
  'pagination',
  'progress',
  'radio',
  'rangepicker',
  'segmented-button',
  'select',
  'slider',
  'snackbar',
  'spinner',
  'switch',
  'table',
  'tabs',
  'textfield',
  'tooltip',
  'top-app-bar',
  // Plus
  'editor',
  'skeleton',
  'tree',
  'navigation-bar',
  'bottom-sheet',
  'side-sheet'
];
const plugins = [
  // MDC
  'event',
  'grid',
  'store',
  'theme',
  'typography',
  'validator',
  'alert',
  'confirm',
  'toast',
  // Plus
  'lazyload'
];
const directives = [
  // MDC
  'a11y',
  'badge',
  'button',
  'elevation',
  'ripple',
  'shape',
  'tooltip',
  'debounce',
  // Plus
  'anchor',
  'copy',
  'longpress'
];
const utils = ['ie', 'types', 'helpers'];

const output = {
  dist: './dist',
  components: './components',
  plugins: './plugins',
  directives: './directives',
  utils: './utils',
  vetur: './vetur'
};

const noAttributesTags = [
  'ui-drawer-header',
  'ui-drawer-title',
  'ui-drawer-subtitle',
  'ui-drawer-content',
  'ui-drawer-app-content',
  'ui-panel',
  'ui-menuitem-text',
  'ui-menuitem-icon',
  'ui-menuitem-divider',
  'ui-item-text-content',
  'ui-item-text1',
  'ui-item-text2',
  'ui-item-first-content',
  'ui-item-last-content',
  'ui-list-group',
  'ui-list-group-subheader',
  'ui-image-text',
  'ui-card-content',
  'ui-card-media-content',
  'ui-card-text',
  'ui-card-buttons',
  'ui-card-icons',
  'ui-dialog-content',
  'ui-tooltip-anchor'
];

module.exports = {
  input,
  components,
  plugins,
  directives,
  utils,
  output,
  noAttributesTags
};

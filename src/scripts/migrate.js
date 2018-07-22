import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
// Layouts
import UiToolbar from './components/toolbar/toolbar';
import UiToolbarRow from './components/toolbar/toolbar-row';
import UiToolbarSection from './components/toolbar/toolbar-section';
import UiToolbarTitle from './components/toolbar/toolbar-title';
import UiToolbarAnchor from './components/toolbar/icons/toolbar-anchor';
import UiToolbarSpan from './components/toolbar/icons/toolbar-span';
import UiToolbarButton from './components/toolbar/icons/toolbar-button';
// Buttons
import UiIconToggle from './components/button/icon-toggle';
// Data View
import UiGridList from './components/grid-list/grid-list';
import UiGridTile from './components/grid-list/grid-tile';
import UiGridTileTitle from './components/grid-list/grid-tile-title';
import UiGridTileSubtitle from './components/grid-list/grid-tile-subtitle';

const version = require('../../package.json').version;

const components = {
  // Layouts
  UiToolbar,
  UiToolbarRow,
  UiToolbarSection,
  UiToolbarTitle,
  UiToolbarAnchor,
  UiToolbarSpan,
  UiToolbarButton,
  // Buttons
  UiIconToggle,
  // Data View
  UiGridList,
  UiGridTile,
  UiGridTileTitle,
  UiGridTileSubtitle
};

const BalmUIMigrate = {
  version,
  install(Vue, options = {}) {
    // Configure the components' props
    multiConfigure(components, options);

    // Install the components
    for (let key in components) {
      let Component = components[key];
      Vue.component(Component.name, Component);
    }
  }
};

autoInstall(BalmUIMigrate);

export default BalmUIMigrate;

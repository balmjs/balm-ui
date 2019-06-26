import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
// Data View
import UiGridList from './components/grid-list/grid-list';
import UiGridTile from './components/grid-list/grid-tile';
import UiGridTileTitle from './components/grid-list/grid-tile-title';
import UiGridTileSubtitle from './components/grid-list/grid-tile-subtitle';

const version = require('../../package.json').version;

const components = {
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

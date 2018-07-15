import autoInstall from '../config/auto-install';

const GRID_PROPERTY = ['margin', 'gutter', 'column-width'];
const SCREEN_SIZE = ['desktop', 'tablet', 'phone'];

const BalmUI_GridPlugin = {
  install(Vue) {
    const $setGrid = (_property, size, value) => {
      if (GRID_PROPERTY.includes(_property)) {
        if (SCREEN_SIZE.includes(size)) {
          document.documentElement.style.setProperty(
            `--mdc-layout-grid-${_property}-${size}`,
            value
          );
        } else {
          console.warn(
            'Please set a screen size: ' + JSON.stringify(SCREEN_SIZE)
          );
        }
      } else {
        console.warn(
          'Please set a grid property: ' + JSON.stringify(GRID_PROPERTY)
        );
      }
    };

    Vue.prototype.$setGrid = $setGrid;
  }
};

autoInstall(BalmUI_GridPlugin);

export default BalmUI_GridPlugin;

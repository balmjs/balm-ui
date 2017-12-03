const GRID_PROPERTY = ['margin', 'gutter', 'column-width'];
const SCREEN_SIZE = ['desktop', 'tablet', 'phone'];

const setGrid = (_property, screenSize, value) => {
  if (GRID_PROPERTY.includes(_property)) {
    if (SCREEN_SIZE.includes(screenSize)) {
      document.documentElement.style.setProperty(
        `--mdc-layout-grid-${_property}-${screenSize}`,
        value
      );
    } else {
      console.warn('Please set a screen size: ' + JSON.stringify(SCREEN_SIZE));
    }
  } else {
    console.warn(
      'Please set a grid property: ' + JSON.stringify(GRID_PROPERTY)
    );
  }
};

const BalmUI_GridPlugin = {
  install(Vue) {
    Vue.prototype.$setGrid = setGrid;
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI_GridPlugin);
}

export default BalmUI_GridPlugin;

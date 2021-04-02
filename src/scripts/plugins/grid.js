// Define grid constants
const GRID_PROPERTY = ['margin', 'gutter', 'column-width'];
const TYPE_OF_DEVICE = ['desktop', 'tablet', 'phone'];

class Grid {
  set(_property, size, value) {
    if (GRID_PROPERTY.includes(_property)) {
      if (TYPE_OF_DEVICE.includes(size)) {
        document.documentElement.style.setProperty(
          `--mdc-layout-grid-${_property}-${size}`,
          value
        );
      } else {
        throw new Error(
          '[$grid]: Please set a device type: ' + JSON.stringify(TYPE_OF_DEVICE)
        );
      }
    } else {
      throw new Error(
        '[$grid]: Please set a grid property: ' + JSON.stringify(GRID_PROPERTY)
      );
    }
  }
}

const grid = new Grid();

function install(app) {
  app.config.globalProperties.$setGrid = () =>
    console.warn(
      '[$grid]',
      `The '$setGrid' has been deprecated. Use the '$grid.set' instead`
    );
  app.config.globalProperties.$grid = grid;
  app.provide('grid', grid);
}

const $grid = {
  install
};

const useGrid = () => grid;

export default $grid;
export { install, useGrid };

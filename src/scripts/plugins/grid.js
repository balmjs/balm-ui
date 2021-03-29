import autoInit from '../config/auto-init';

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

const $grid = {
  install(Vue) {
    Vue.prototype.$setGrid = () =>
      console.warn(
        '[$grid]',
        `The '$setGrid' has been deprecated. Use the '$grid.set' instead`
      );
    Vue.prototype.$grid = grid;
  }
};

const useGrid = () => grid;

autoInit($grid);

export default $grid;
export { useGrid };

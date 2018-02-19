import multiBootstrap from '../config/multi-bootstrap';
import UiGrid from './grid/grid';
import UiGridInner from './grid/grid-inner';
import UiCell from './grid/cell';

const components = {
  UiGrid,
  UiGridInner,
  UiCell
};

multiBootstrap(components);

export default components;
export { UiGrid, UiGridInner, UiCell };

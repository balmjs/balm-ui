import multiBootstrap from '../config/multi-bootstrap';
import UiGrid from './grid/grid';
import UiGridInner from './grid/grid-inner';
import UiGridCell from './grid/grid-cell';

const components = {
  UiGrid,
  UiGridInner,
  UiGridCell
};

multiBootstrap(components);

export default components;
export {
  UiGrid,
  UiGridInner,
  UiGridCell
};

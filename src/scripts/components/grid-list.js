import multiBootstrap from '../config/multi-bootstrap';
import UiGridList from './grid-list/grid-list';
import UiGridTile from './grid-list/grid-tile';
import UiGridTileTitle from './grid-list/grid-tile-title';
import UiGridTileSubtitle from './grid-list/grid-tile-subtitle';

const components = {
  UiGridList,
  UiGridTile,
  UiGridTileTitle,
  UiGridTileSubtitle
};

multiBootstrap(components);

export default components;
export { UiGridList, UiGridTile, UiGridTileTitle, UiGridTileSubtitle };

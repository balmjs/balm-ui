import multiBootstrap from '../config/multi-bootstrap';
import UiGridList from './grid-list/grid-list';
import UiGridTile from './grid-list/grid-tile';
import UiGridTileTitle from './grid-list/grid-tile-title';
import UiGridTileText from './grid-list/grid-tile-text';

const components = {
  UiGridList,
  UiGridTile,
  UiGridTileTitle,
  UiGridTileText
};

multiBootstrap(components);

export default components;
export { UiGridList, UiGridTile, UiGridTileTitle, UiGridTileText };

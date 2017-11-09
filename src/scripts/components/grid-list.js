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

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;

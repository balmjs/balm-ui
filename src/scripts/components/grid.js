import UiGrid from './grid/grid';
import UiGridInner from './grid/grid-inner';
import UiCell from './grid/cell';

const components = {
  UiGrid,
  UiGridInner,
  UiCell
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;

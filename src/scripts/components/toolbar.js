import UiToolbar from './toolbar/toolbar';
import UiToolbarRow from './toolbar/toolbar-row';
import UiToolbarSection from './toolbar/toolbar-section';
import UiToolbarTitle from './toolbar/toolbar-title';
import UiToolbarAnchor from './toolbar/icons/toolbar-anchor';
import UiToolbarSpan from './toolbar/icons/toolbar-span';
import UiToolbarButton from './toolbar/icons/toolbar-button';

const components = {
  UiToolbar,
  UiToolbarRow,
  UiToolbarSection,
  UiToolbarTitle,
  UiToolbarAnchor,
  UiToolbarSpan,
  UiToolbarButton
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;

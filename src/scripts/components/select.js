import UiSelect from './input-controls/select';
import UiSelect2 from './input-controls/select2';

const components = {
  UiSelect,
  UiSelect2
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;

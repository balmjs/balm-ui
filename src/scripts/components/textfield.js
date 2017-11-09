import UiTextfield from './input-controls/textfield';
import UiTextfieldHelptext from './input-controls/textfield-helptext';

const components = {
  UiTextfield,
  UiTextfieldHelptext
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;

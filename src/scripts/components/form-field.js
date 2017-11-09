import UiFormField from './input-controls/form-field';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiFormField.name, UiFormField);
}

export default UiFormField;

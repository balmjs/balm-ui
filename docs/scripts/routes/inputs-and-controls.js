const Textfield = () =>
  import ('../views/components/textfield');
const Checkbox = () =>
  import ('../views/components/checkbox');
const Radio = () =>
  import ('../views/components/radio');
const Select = () =>
  import ('../views/components/select');
const Switch = () =>
  import ('../views/components/switch');
const Slider = () =>
  import ('../views/components/slider');
const Dropdown = () =>
  import ('../views/components/dropdown');
const Autocomplete = () =>
  import ('../views/components/autocomplete');
const Validator = () =>
  import ('../views/plugins/validator');

export default [{
    path: 'textfield',
    name: 'form.textfield',
    component: Textfield
  },
  {
    path: 'checkbox',
    name: 'form.checkbox',
    component: Checkbox
  },
  {
    path: 'radio',
    name: 'form.radio',
    component: Radio
  },
  {
    path: 'select',
    name: 'form.select',
    component: Select
  },
  {
    path: 'switch',
    name: 'form.switch',
    component: Switch
  },
  {
    path: 'slider',
    name: 'form.slider',
    component: Slider
  },
  {
    path: 'dropdown',
    name: 'form.dropdown',
    component: Dropdown
  },
  {
    path: 'autocomplete',
    name: 'form.autocomplete',
    component: Autocomplete
  },
  {
    path: 'validator',
    name: 'form.validator',
    component: Validator
  }
];

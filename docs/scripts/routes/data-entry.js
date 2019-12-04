const Textfield = () => import('@/views/components/textfield');
const Select = () => import('@/views/components/select');
const Checkbox = () => import('@/views/components/checkbox');
const Radio = () => import('@/views/components/radio');
const Switch = () => import('@/views/components/switch');
const Slider = () => import('@/views/components/slider');
const File = () => import('@/views/components/file');
const Autocomplete = () => import('@/views/components/autocomplete');
const Validator = () => import('@/views/plugins/validator');

export default [
  {
    path: 'textfield',
    name: 'data-entry.textfield',
    component: Textfield
  },
  {
    path: 'select',
    name: 'data-entry.select',
    component: Select
  },
  {
    path: 'checkbox',
    name: 'data-entry.checkbox',
    component: Checkbox
  },
  {
    path: 'radio',
    name: 'data-entry.radio',
    component: Radio
  },
  {
    path: 'switch',
    name: 'data-entry.switch',
    component: Switch
  },
  {
    path: 'slider',
    name: 'data-entry.slider',
    component: Slider
  },
  {
    path: 'file',
    name: 'data-entry.file',
    component: File
  },
  {
    path: 'autocomplete',
    name: 'data-entry.autocomplete',
    component: Autocomplete
  },
  {
    path: 'validator',
    name: 'data-entry.validator',
    component: Validator
  }
];

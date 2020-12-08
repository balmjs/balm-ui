import { defineAsyncComponent } from 'vue';
const Textfield = defineAsyncComponent(() =>
  import('@/views/components/textfield')
);
const Select = defineAsyncComponent(() => import('@/views/components/select'));
const Checkbox = defineAsyncComponent(() =>
  import('@/views/components/checkbox')
);
const Radio = defineAsyncComponent(() => import('@/views/components/radio'));
const Chips = defineAsyncComponent(() => import('@/views/components/chips'));
const Switch = defineAsyncComponent(() => import('@/views/components/switch'));
const Slider = defineAsyncComponent(() => import('@/views/components/slider'));
const File = defineAsyncComponent(() => import('@/views/components/file'));
const Autocomplete = defineAsyncComponent(() =>
  import('@/views/components/autocomplete')
);
const Datepicker = defineAsyncComponent(() =>
  import('@/views/components/datepicker')
);
const Rangepicker = defineAsyncComponent(() =>
  import('@/views/components/rangepicker')
);
const Editor = defineAsyncComponent(() => import('@/views/components/editor'));
const Validator = defineAsyncComponent(() =>
  import('@/views/plugins/validator')
);

export default [
  {
    path: '',
    redirect: () => {
      return { name: 'data-input.textfield' };
    }
  },
  {
    path: 'textfield',
    name: 'data-input.textfield',
    component: Textfield
  },
  {
    path: 'select',
    name: 'data-input.select',
    component: Select
  },
  {
    path: 'checkbox',
    name: 'data-input.checkbox',
    component: Checkbox
  },
  {
    path: 'radio',
    name: 'data-input.radio',
    component: Radio
  },
  {
    path: 'chips',
    name: 'data-input.chips',
    component: Chips
  },
  {
    path: 'switch',
    name: 'data-input.switch',
    component: Switch
  },
  {
    path: 'slider',
    name: 'data-input.slider',
    component: Slider
  },
  {
    path: 'file',
    name: 'data-input.file',
    component: File
  },
  {
    path: 'autocomplete',
    name: 'data-input.autocomplete',
    component: Autocomplete
  },
  {
    path: 'datepicker',
    name: 'data-input.datepicker',
    component: Datepicker
  },
  {
    path: 'rangepicker',
    name: 'data-input.rangepicker',
    component: Rangepicker
  },
  {
    path: 'editor',
    name: 'data-input.editor',
    component: Editor
  },
  {
    path: 'validator',
    name: 'data-input.validator',
    component: Validator
  }
];

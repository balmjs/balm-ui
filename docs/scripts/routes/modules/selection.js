const Chips = () => import('@/views/components/chips');
const Menu = () => import('@/views/components/menu');
const Select = () => import('@/views/components/select');
const Checkbox = () => import('@/views/components/checkbox');
const Radio = () => import('@/views/components/radio');
const Slider = () => import('@/views/components/slider');
const Switch = () => import('@/views/components/switch');
const File = () => import('@/views/components/file');
const Datepicker = () => import('@/views/components/datepicker');
const Rangepicker = () => import('@/views/components/rangepicker');

export default [
  {
    path: 'menu',
    name: 'selection.menu',
    component: Menu
  },
  {
    path: 'select',
    name: 'selection.select',
    component: Select
  },
  {
    path: 'checkbox',
    name: 'selection.checkbox',
    component: Checkbox
  },
  {
    path: 'radio',
    name: 'selection.radio',
    component: Radio
  },
  {
    path: 'chips',
    name: 'selection.chips',
    component: Chips
  },
  {
    path: 'switch',
    name: 'selection.switch',
    component: Switch
  },
  {
    path: 'slider',
    name: 'selection.slider',
    component: Slider
  },
  {
    path: 'file',
    name: 'selection.file',
    component: File
  },
  {
    path: 'datepicker',
    name: 'selection.datepicker',
    component: Datepicker
  },
  {
    path: 'rangepicker',
    name: 'selection.rangepicker',
    component: Rangepicker
  }
];

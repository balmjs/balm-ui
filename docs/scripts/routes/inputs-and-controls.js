const Textfield = () => import('../views/components/textfield');
const Checkbox = () => import('../views/components/checkbox');
const Radio = () => import('../views/components/radio');
const Select = () => import('../views/components/select');
const Switch = () => import('../views/components/switch');
const Slider = () => import('../views/components/slider');

export default [
  {
    path: '/textfield',
    name: 'textfield',
    component: Textfield
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: Checkbox
  },
  {
    path: '/radio',
    name: 'radio',
    component: Radio
  },
  {
    path: '/select',
    name: 'select',
    component: Select
  },
  {
    path: '/switch',
    name: 'switch',
    component: Switch
  },
  {
    path: '/slider',
    name: 'slider',
    component: Slider
  }
];

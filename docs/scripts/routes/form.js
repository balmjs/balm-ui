const Textfield = require('../views/textfield');
const Radio = require('../views/radio');
const Checkbox = require('../views/checkbox');
const Select = require('../views/select');
const Slider = require('../views/slider');

const formRoutes = [{
  path: '/textfield',
  name: 'textfield',
  component: Textfield
}, {
  path: '/radio',
  name: 'radio',
  component: Radio
}, {
  path: '/checkbox',
  name: 'checkbox',
  component: Checkbox
}, {
  path: '/select',
  name: 'select',
  component: Select
}, {
  path: '/slider',
  name: 'slider',
  component: Slider
}];

export default formRoutes;

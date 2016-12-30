const Form = require('../views/form');
const Textfield = require('../views/textfield');
const Radio = require('../views/radio');
const Slider = require('../views/slider');

const formRoutes = [{
  path: '/form',
  name: 'form',
  component: Form
}, {
  path: '/textfield',
  name: 'textfield',
  component: Textfield
}, {
  path: '/radio',
  name: 'radio',
  component: Radio
}, {
  path: '/slider',
  name: 'slider',
  component: Slider
}];

export default formRoutes;

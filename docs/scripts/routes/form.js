const Slider = require('../views/slider');
const Checkbox = require('../views/checkbox');
const Radio = require('../views/radio');
const IconToggle = require('../views/icon-toggle');
const Switch = require('../views/switch');
const Textfield = require('../views/textfield');
const Select = require('../views/select');
const Autocomplete = require('../views/autocomplete');
const Datepicker = require('../views/datepicker');
const Fileupload = require('../views/fileupload');

const formRoutes = [{
  path: '/slider',
  name: 'slider',
  component: Slider
}, {
  path: '/checkbox',
  name: 'checkbox',
  component: Checkbox
}, {
  path: '/radio',
  name: 'radio',
  component: Radio
}, {
  path: '/icon-toggle',
  name: 'icon-toggle',
  component: IconToggle
}, {
  path: '/switch',
  name: 'switch',
  component: Switch
}, {
  path: '/textfield',
  name: 'textfield',
  component: Textfield
}, {
  path: '/select',
  name: 'select',
  component: Select
}, {
  path: '/autocomplete',
  name: 'autocomplete',
  component: Autocomplete
}, {
  path: '/datepicker',
  name: 'datepicker',
  component: Datepicker
}, {
  path: '/fileupload',
  name: 'fileupload',
  component: Fileupload
}];

export default formRoutes;

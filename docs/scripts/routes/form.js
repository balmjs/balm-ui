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
  component: Slider,
  meta: {
    title: 'BalmUI - Slider',
    keywords: '',
    description: ''
  }
}, {
  path: '/checkbox',
  name: 'checkbox',
  component: Checkbox,
  meta: {
    title: 'BalmUI - Checkbox',
    keywords: '',
    description: ''
  }
}, {
  path: '/radio',
  name: 'radio',
  component: Radio,
  meta: {
    title: 'BalmUI - Radio button',
    keywords: '',
    description: ''
  }
}, {
  path: '/icon-toggle',
  name: 'icon-toggle',
  component: IconToggle,
  meta: {
    title: 'BalmUI - Icon toggle',
    keywords: '',
    description: ''
  }
}, {
  path: '/switch',
  name: 'switch',
  component: Switch,
  meta: {
    title: 'BalmUI - Switch',
    keywords: '',
    description: ''
  }
}, {
  path: '/textfield',
  name: 'textfield',
  component: Textfield,
  meta: {
    title: 'BalmUI - Textfield',
    keywords: '',
    description: ''
  }
}, {
  path: '/select',
  name: 'select',
  component: Select,
  meta: {
    title: 'BalmUI - Select',
    keywords: '',
    description: ''
  }
}, {
  path: '/autocomplete',
  name: 'autocomplete',
  component: Autocomplete,
  meta: {
    title: 'BalmUI - Autocomplete',
    keywords: '',
    description: ''
  }
}, {
  path: '/datepicker',
  name: 'datepicker',
  component: Datepicker,
  meta: {
    title: 'BalmUI - Datepicker',
    keywords: '',
    description: ''
  }
}, {
  path: '/fileupload',
  name: 'fileupload',
  component: Fileupload,
  meta: {
    title: 'BalmUI - Fileupload',
    keywords: '',
    description: ''
  }
}];

export default formRoutes;

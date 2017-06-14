const FormField = resolve => require(['../views/form-field'], resolve);
const Checkbox = resolve => require(['../views/checkbox'], resolve);
const Radio = resolve => require(['../views/radio'], resolve);
const IconToggle = resolve => require(['../views/icon-toggle'], resolve);
const Switch = resolve => require(['../views/switch'], resolve);
const Textfield = resolve => require(['../views/textfield'], resolve);
const Select = resolve => require(['../views/select'], resolve);

const formRoutes = [{
  path: '/form-field',
  name: 'form-field',
  component: FormField,
  meta: {
    title: 'BalmUI - FormField',
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
}];

export default formRoutes;

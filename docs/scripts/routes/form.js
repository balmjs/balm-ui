const FormField = () => import('../views/form-field');
const Checkbox = () => import('../views/checkbox');
const Radio = () => import('../views/radio');
const IconToggle = () => import('../views/icon-toggle');
const Switch = () => import('../views/switch');
const Textfield = () => import('../views/textfield');
const Select = () => import('../views/select');

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

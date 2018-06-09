const FormField = () => import('../views/form-field');
const Checkbox = () => import('../views/components/checkbox');
const Radio = () => import('../views/radio');
const Switch = () => import('../views/switch');
const Textfield = () => import('../views/textfield');
const Select = () => import('../views/select');
const Slider = () => import('../views/slider');

const formRoutes = [
  {
    path: '/form-field',
    name: 'form-field',
    component: FormField,
    meta: {
      title: 'BalmUI - FormField',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: Checkbox,
    meta: {
      title: 'BalmUI - Checkbox',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/radio',
    name: 'radio',
    component: Radio,
    meta: {
      title: 'BalmUI - Radio button',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/switch',
    name: 'switch',
    component: Switch,
    meta: {
      title: 'BalmUI - Switch',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/textfield',
    name: 'textfield',
    component: Textfield,
    meta: {
      title: 'BalmUI - Textfield',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/select',
    name: 'select',
    component: Select,
    meta: {
      title: 'BalmUI - Select',
      keywords: '',
      description: ''
    }
  },
  {
    path: '/slider',
    name: 'slider',
    component: Slider,
    meta: {
      title: 'BalmUI - Slider',
      keywords: '',
      description: ''
    }
  }
];

export default formRoutes;

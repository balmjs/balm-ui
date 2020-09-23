const Color = () => import('@/views/plugins/theme');
const Typography = () => import('@/views/plugins/typography');
const Shape = () => import('@/views/directives/shape');
const Icon = () => import('@/views/components/icon');

export default [
  {
    path: '',
    redirect: 'color'
  },
  {
    path: 'color',
    name: 'theme.color',
    component: Color
  },
  {
    path: 'typography',
    name: 'theme.typography',
    component: Typography
  },
  {
    path: 'shape',
    name: 'theme.shape',
    component: Shape
  },
  {
    path: '/icons',
    name: 'icons',
    component: Icon
  }
];

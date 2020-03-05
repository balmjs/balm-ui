const Color = () => import('@/views/plugins/theme');
const Typography = () => import('@/views/plugins/typography');
const Icon = () => import('@/views/components/icon');

export default [
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
    path: '/icons',
    name: 'icons',
    component: Icon
  }
];

const Color = () => import('@/views/plugins/theme');
const Elevation = () => import('@/views/directives/elevation');
const Icon = () => import('@/views/components/icon');
const Shape = () => import('@/views/directives/shape');
const Typography = () => import('@/views/plugins/typography');

export default [
  {
    path: 'color',
    name: 'styles.color',
    component: Color
  },
  {
    path: 'elevation',
    name: 'styles.elevation',
    component: Elevation
  },
  {
    path: '/icons',
    name: 'icons',
    component: Icon
  },
  {
    path: 'shape',
    name: 'styles.shape',
    component: Shape
  },
  {
    path: 'typography',
    name: 'styles.typography',
    component: Typography
  }
];

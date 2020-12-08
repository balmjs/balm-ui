import { defineAsyncComponent } from 'vue';
const Color = defineAsyncComponent(() => import('@/views/plugins/theme'));
const Typography = defineAsyncComponent(() =>
  import('@/views/plugins/typography')
);
const Shape = defineAsyncComponent(() => import('@/views/directives/shape'));
const Icon = defineAsyncComponent(() => import('@/views/components/icon'));

export default [
  {
    path: '',
    redirect: () => {
      return { name: 'theme.color' };
    }
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

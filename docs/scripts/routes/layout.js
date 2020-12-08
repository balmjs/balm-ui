import { defineAsyncComponent } from 'vue';
const TopAppBar = defineAsyncComponent(() =>
  import('@/views/components/top-app-bar')
);
const Grid = defineAsyncComponent(() => import('@/views/components/grid'));
const Form = defineAsyncComponent(() => import('@/views/components/form'));
const Divider = defineAsyncComponent(() =>
  import('@/views/components/divider')
);

export default [
  {
    path: '',
    redirect: () => {
      return { name: 'layout.top-app-bar' };
    }
  },
  {
    path: 'top-app-bar',
    name: 'layout.top-app-bar',
    component: TopAppBar,
    meta: { noLayout: true }
  },
  {
    path: 'grid',
    name: 'layout.grid',
    component: Grid,
    meta: { noLayout: true }
  },
  {
    path: 'form',
    name: 'layout.form',
    component: Form
  },
  {
    path: 'divider',
    name: 'layout.divider',
    component: Divider
  }
];

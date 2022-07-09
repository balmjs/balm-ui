import BlankLayout from '@/views/layouts/blank';
const CompositionTest = () => import('@/views/test/composition');
const OptionsTest = () => import('@/views/test/options');

export default [
  {
    path: '/test',
    name: 'test',
    redirect: { name: 'test.composition' },
    component: BlankLayout,
    children: [
      {
        path: 'composition/:id?',
        name: 'test.composition',
        component: CompositionTest,
        meta: { noLayout: true }
      },
      {
        path: 'options/:id?',
        name: 'test.options',
        component: OptionsTest,
        meta: { noLayout: true }
      }
    ]
  }
];

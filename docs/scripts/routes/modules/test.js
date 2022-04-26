import BlankLayout from '@/views/layouts/blank';
const CompositionTest = () => import('@/views/test/composition');
const OptionsTest = () => import('@/views/test/options');

export default [
  {
    path: '/test',
    name: 'test',
    component: BlankLayout,
    children: [
      {
        path: '',
        redirect: () => ({ name: 'test.composition' })
      },
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

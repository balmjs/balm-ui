import { isDev } from '@/config';
import BlankLayout from '@/views/layouts/blank';
const MainTest = () => import('@/views/test/main');
const Subtest = () => import('@/views/test/sub');

const testSingleRoute = true;

const testRoutes = isDev
  ? [
      testSingleRoute
        ? {
            path: '/test',
            name: 'test',
            component: MainTest,
            meta: { noLayout: true }
          }
        : {
            path: '/test',
            name: 'test',
            component: BlankLayout,
            children: [
              {
                path: '',
                redirect: () => {
                  return { name: 'test.main' };
                }
              },
              {
                path: 'main',
                name: 'test.main',
                component: MainTest,
                meta: { noLayout: true }
              },
              {
                path: 'sub/:id?',
                name: 'test.sub',
                component: Subtest,
                meta: { noLayout: true }
              }
            ]
          }
    ]
  : [];

export default testRoutes;

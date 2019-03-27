import { isDev } from '@/config';
const Test = () => import('@/views/test');

let testRoutes = [
  {
    path: '/test',
    name: 'test',
    component: Test,
    meta: { noLayout: true }
  }
];

export default (isDev ? testRoutes : []);

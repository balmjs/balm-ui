const Test = () => import('../views/test');

let isDev = process.env.NODE_ENV === 'development';

let testRoutes = [
  {
    path: '/test',
    name: 'test',
    component: Test,
    meta: { noLayout: true }
  }
];

export default (isDev ? testRoutes : []);

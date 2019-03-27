const Intro = () => import('@/views/guide/intro');
const Quickstart = () => import('@/views/guide/quickstart');
const Advanced = () => import('@/views/guide/advanced');
const KillIE = () => import('@/views/guide/kill-ie');

export default [
  {
    path: 'intro',
    name: 'guide.intro',
    component: Intro
  },
  {
    path: 'quickstart',
    name: 'guide.quickstart',
    component: Quickstart
  },
  {
    path: 'advanced',
    name: 'guide.advanced',
    component: Advanced
  },
  {
    path: 'kill-ie',
    name: 'guide.kill-ie',
    component: KillIE
  }
];

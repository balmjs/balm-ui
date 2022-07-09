const Intro = () => import('@/views/guide/intro');
const Quickstart = () => import('@/views/guide/quickstart');
const Advanced = () => import('@/views/guide/advanced');
const TS = () => import('@/views/guide/typescript-support');
const KillIE = () => import('@/views/guide/kill-ie');
const Upgrade = () => import('@/views/guide/upgrade');

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
    path: 'typescript-support',
    name: 'guide.ts',
    component: TS
  },
  {
    path: 'kill-ie',
    name: 'guide.kill-ie',
    component: KillIE
  },
  {
    path: 'upgrade',
    name: 'guide.upgrade',
    component: Upgrade
  }
];

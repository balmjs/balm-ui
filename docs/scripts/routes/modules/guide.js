const Introduction = () => import('@/views/guide/introduction');
const QuickStart = () => import('@/views/guide/quick-start');
const Advanced = () => import('@/views/guide/advanced');
const TS = () => import('@/views/guide/typescript-support');
const KillIE = () => import('@/views/guide/kill-ie');
const Upgrade = () => import('@/views/guide/upgrade');

export default [
  {
    path: 'introduction',
    name: 'guide.introduction',
    component: Introduction
  },
  {
    path: 'quick-start',
    name: 'guide.quick-start',
    component: QuickStart
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

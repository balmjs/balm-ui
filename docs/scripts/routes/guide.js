import { defineAsyncComponent } from 'vue';
const Intro = defineAsyncComponent(() => import('@/views/guide/intro'));
const Quickstart = defineAsyncComponent(() =>
  import('@/views/guide/quickstart')
);
const Advanced = defineAsyncComponent(() => import('@/views/guide/advanced'));
const KillIE = defineAsyncComponent(() => import('@/views/guide/kill-ie'));
const Upgrade = defineAsyncComponent(() => import('@/views/guide/upgrade'));

export default [
  {
    path: '',
    redirect: () => {
      return { name: 'guide.intro' };
    }
  },
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
  },
  {
    path: 'upgrade',
    name: 'guide.upgrade',
    component: Upgrade
  }
];

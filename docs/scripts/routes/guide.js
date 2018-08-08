const Intro = () =>
  import ('../views/guide/intro');
const Quickstart = () =>
  import ('../views/guide/quickstart');
const Advanced = () =>
  import ('../views/guide/advanced');
const KillIE = () =>
  import ('../views/guide/kill-ie');

export default [, {
  path: '/intro',
  name: 'intro',
  component: Intro
}, {
  path: '/quickstart',
  name: 'quickstart',
  component: Quickstart
}, {
  path: '/advanced',
  name: 'advanced',
  component: Advanced
}, {
  path: '/kill-ie',
  name: 'kill-ie',
  component: KillIE
}];

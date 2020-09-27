import { useBus } from 'balm-ui';

const CLASS_NAMESPACE = 'balmui';

export function initRouter(router) {
  const bus = useBus();

  router.beforeEach((to, from, next) => {
    bus.pub('page-loading');
    next();
  });

  router.afterEach((to, from) => {
    let pageClassList = document.querySelector('html').classList;
    let routeName = to.name;
    let isNoLayout = routeName
      ? routeName.indexOf('-drawer') > -1 ||
        routeName.indexOf('-toolbar') > -1 ||
        ['layouts.grid', 'layouts.top-app-bar', 'test'].includes(routeName)
      : true;

    if (isNoLayout) {
      pageClassList.add(`${CLASS_NAMESPACE}-no-layout`);
    } else {
      pageClassList.remove(`${CLASS_NAMESPACE}-no-layout`);
    }

    if (from.name) {
      let fromName = from.name.replace('.', '_');
      pageClassList.remove(`${CLASS_NAMESPACE}-${fromName}`);
    }

    if (to.name) {
      let toName = to.name.replace('.', '_');
      pageClassList.add(`${CLASS_NAMESPACE}-${toName}`);
    }

    bus.pub('page-loaded');
  });
}

import version from './version';
import autoInstall from './config/auto-install';
import autoInit from './config/auto-init';
/**
 * Components
 */
import UiBottomNavigation from './components/bottom-navigation/bottom-navigation';
/**
 * Plugins
 */
import $lazyload from './plugins/lazyload';

const Components = {
  UiBottomNavigation
};

const Plugins = {
  $lazyload
};

const Directives = {};

const install = (Vue, options = {}) =>
  autoInstall(Vue, options, {
    Components,
    Plugins,
    Directives
  });

const BalmUINext = {
  version,
  install
};

autoInit(BalmUINext);

export default BalmUINext;
export { version, install };
export { UiBottomNavigation };
export { $lazyload };

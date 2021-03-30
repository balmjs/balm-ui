import version from './version';
import autoInit from './config/auto-init';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
import UiBottomNavigation from './components/bottom-navigation/bottom-navigation';

const Components = {
  UiBottomNavigation
};

const Plugins = {};

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

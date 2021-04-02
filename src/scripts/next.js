import version from './version';
import autoInstall from './config/auto-install';
/**
 * Components
 */
import UiBottomNavigation from './components/bottom-navigation/bottom-navigation.vue';

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

export default BalmUINext;
export { version, install };
export { UiBottomNavigation };

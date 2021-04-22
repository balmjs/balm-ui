import version from './version';
import autoInstall from './config/auto-install';
/**
 * Components
 */
import UiBottomNavigation from './components/bottom-navigation/bottom-navigation.vue';
import UiBottomSheet from './components/bottom-navigation/bottom-sheet.vue';
/**
 * Plugins
 */
import $lazyload from './plugins/lazyload';

const Components = {
  UiBottomNavigation,
  UiBottomSheet
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

export default BalmUINext;
export { version, install };
export { UiBottomNavigation, UiBottomSheet };
export { $lazyload };

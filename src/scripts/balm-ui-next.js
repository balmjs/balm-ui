import version from './version';
import autoInstall from './config/auto-install';
/**
 * Components
 */
import UiNavigationBar from './components/navigation-bar/navigation-bar.vue';
import UiBottomSheet from './components/bottom-sheet/bottom-sheet.vue';
import UiNavigationRail from './components/navigation-rail/navigation-rail.vue';
/**
 * Plugins
 */
import $lazyload from './plugins/lazyload';

const Components = {
  UiBottomSheet,
  UiNavigationBar,
  UiNavigationRail
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
  install
};

export default BalmUINext;
export { version, install };
export { UiBottomSheet, UiNavigationBar, UiNavigationRail };
export { $lazyload };

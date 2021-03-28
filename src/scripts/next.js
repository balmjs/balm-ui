import version from './version';
import autoInit from './config/auto-init';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
import UiBottomNavigation from './components/bottom-navigation/bottom-navigation';

const components = {
  UiBottomNavigation
};

function install(Vue, options = {}) {
  // Configure the components' props
  multiConfigure(components, options);

  // Install the components
  for (let key in components) {
    let Component = components[key];
    Vue.component(Component.name, Component);
  }
}

const BalmUINext = {
  version,
  install
};

autoInit(BalmUINext);

export default BalmUINext;
export { version, install };
export { UiBottomNavigation };

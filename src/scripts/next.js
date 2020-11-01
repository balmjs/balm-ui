import packageJson from '../../package.json';
import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
import UiBottomNavigation from './components/navigation/bottom-navigation';
import UiSegmentedButton from './components/buttons/segmented-button';

const version = packageJson.version;

const components = {
  UiBottomNavigation,
  UiSegmentedButton
};

const BalmUINext = {
  version,
  install(Vue, options = {}) {
    // Configure the components' props
    multiConfigure(components, options);

    // Install the components
    for (let key in components) {
      let Component = components[key];
      Vue.component(Component.name, Component);
    }
  }
};

autoInstall(BalmUINext);

export default BalmUINext;
export { UiBottomNavigation, UiSegmentedButton };

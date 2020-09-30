import packageJson from '../../package.json';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
import UiBottomNavigation from './components/navigation/bottom-navigation';

const components = {
  UiBottomNavigation
};

const BalmUINext = {
  version: packageJson.version,
  install(app, options = {}) {
    // Configure the components' props
    multiConfigure(components, options);

    // Install the components
    for (let key in components) {
      let Component = components[key];
      app.component(Component.name, Component);
    }
  }
};

export default BalmUINext;
export { UiBottomNavigation };

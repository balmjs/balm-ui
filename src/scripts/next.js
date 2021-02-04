import packageJson from '../../package.json';
import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
import UiBottomNavigation from './components/navigation/bottom-navigation';
import UiTree from './components/trees/tree';
import UiTreeNode from './components/trees/tree-node';

const version = packageJson.version;

const components = {
  UiBottomNavigation,
  UiTree,
  UiTreeNode
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
export { UiBottomNavigation };

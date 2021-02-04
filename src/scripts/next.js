import version from './version';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
import UiBottomNavigation from './components/navigation/bottom-navigation';
import UiTree from './components/trees/tree';
import UiTreeNode from './components/trees/tree-node';

const components = {
  UiBottomNavigation,
  UiTree,
  UiTreeNode
};

function install(app, options = {}) {
  // Configure the components' props
  multiConfigure(components, options);

  // Install the components
  for (let key in components) {
    let Component = components[key];
    app.component(Component.name, Component);
  }
}

const BalmUINext = {
  version,
  install
};

export default BalmUINext;
export { version, install };
export { UiBottomNavigation };

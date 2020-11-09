import version from './version';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
import UiBottomNavigation from './components/navigation/bottom-navigation';
import UiSegmentedButtons from './components/buttons/segmented-buttons';
import UiSegmentedButton from './components/buttons/segmented-button';

const components = {
  UiBottomNavigation,
  UiSegmentedButtons,
  UiSegmentedButton
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
export { UiBottomNavigation, UiSegmentedButtons, UiSegmentedButton };
export { version, install };

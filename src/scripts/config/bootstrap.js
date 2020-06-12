import autoInstall from './auto-install';
import configure from './configure';

const bootstrap = (Component) => {
  const UiComponent = {
    install(Vue, options = {}) {
      // Configure the component's props
      configure(Component, options);

      // Install the component
      Vue.component(Component.name, Component);
    }
  };

  autoInstall(UiComponent);

  return UiComponent;
};

export default bootstrap;

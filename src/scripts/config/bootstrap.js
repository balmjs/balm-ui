import autoInit from './auto-init';
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

  autoInit(UiComponent);

  return UiComponent;
};

export default bootstrap;

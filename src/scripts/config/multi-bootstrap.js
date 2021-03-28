import autoInit from './auto-init';
import multiConfigure from './multi-configure';

const multiBootstrap = (components) => {
  const UiComponents = {
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

  autoInit(UiComponents);

  return UiComponents;
};

export default multiBootstrap;

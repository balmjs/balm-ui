import autoInit from './auto-init';
import multiConfigure from './multi-configure';

const multiBootstrap = (Components) => {
  const UiComponents = {
    install(Vue, options = {}) {
      // Configure the components' props
      multiConfigure(Components, options);

      // Install the components
      for (const key in Components) {
        const Component = Components[key];
        Vue.component(Component.name, Component);
      }
    }
  };

  autoInit(UiComponents);

  return UiComponents;
};

export default multiBootstrap;

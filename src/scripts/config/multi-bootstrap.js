import multiConfigure from './multi-configure';

const multiBootstrap = (components) => {
  const UiComponents = {
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

  return UiComponents;
};

export default multiBootstrap;

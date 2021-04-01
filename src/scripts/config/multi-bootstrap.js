import multiConfigure from './multi-configure';

const multiBootstrap = (Components) => {
  const UiComponents = {
    install(app, options = {}) {
      // Configure the components' props
      multiConfigure(Components, options);

      // Install the components
      for (let key in Components) {
        const Component = Components[key];
        app.component(Component.name, Component);
      }
    }
  };

  return UiComponents;
};

export default multiBootstrap;

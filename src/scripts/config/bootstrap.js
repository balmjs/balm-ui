import configure from './configure';

const bootstrap = (Component) => {
  const UiComponent = {
    install(app, options = {}) {
      // Configure the component's props
      configure(Component, options);

      // Install the component
      app.component(Component.name, Component);
    }
  };

  return UiComponent;
};

export default bootstrap;

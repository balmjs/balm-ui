import configure from './configure';

const multiConfigure = (components, options) => {
  Object.keys(options).forEach(key => {
    if (components[key] === undefined) {
      return;
    }

    const Component = components[key];
    const props = options[key];

    configure(Component, props);
  });
};

export default multiConfigure;

import configure from './configure';

const multiConfigure = (Components, options) => {
  for (const key of Object.keys(options)) {
    if (Components[key] === undefined) {
      return;
    }

    const Component = Components[key];
    const props = options[key];

    configure(Component, props);
  }
};

export default multiConfigure;

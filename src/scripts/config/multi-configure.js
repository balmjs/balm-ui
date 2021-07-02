import configure from './configure';

const multiConfigure = (Components, options) => {
  for (const key of Object.keys(options)) {
    if (/^Ui[A-Z]{1}[A-Za-z]+$/.test(key)) {
      const Component = Components[key];
      const props = options[key];

      configure(Component, props);
    }
  }
};

export default multiConfigure;

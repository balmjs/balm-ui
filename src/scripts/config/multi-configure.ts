import configure from './configure';
import { VueComponent, LooseObject } from '@balm-ui-types';

const multiConfigure = (
  components: { [key: string]: VueComponent },
  options: LooseObject
) => {
  Object.keys(options).forEach((key) => {
    if (components[key] === undefined) {
      return;
    }

    const Component: VueComponent = components[key];
    const props = options[key];

    configure(Component, props);
  });
};

export default multiConfigure;

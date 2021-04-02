import configure from './configure';
import { VueComponent, LooseObject } from '@balm-ui-types';

const multiConfigure = (
  Components: { [key: string]: VueComponent },
  options: LooseObject
) => {
  for (const key of Object.keys(options)) {
    if (/^Ui[A-Z]{1}[A-Za-z]+$/.test(key)) {
      const Component: VueComponent = Components[key];
      const props = options[key];

      configure(Component, props);
    }
  }
};

export default multiConfigure;

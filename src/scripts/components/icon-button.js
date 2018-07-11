import multiBootstrap from '../config/multi-bootstrap';
import UiIconButton from './button/icon-button';
import UiIconLink from './button/icon-link';

const components = {
  UiIconButton,
  UiIconLink
};

multiBootstrap(components);

export default components;
export {
  UiIconButton,
  UiIconLink
};

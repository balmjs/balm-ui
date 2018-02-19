import multiBootstrap from '../config/multi-bootstrap';
import UiButton from './button/button';
import UiLink from './button/link';

const components = {
  UiButton,
  UiLink
};

multiBootstrap(components);

export default components;
export { UiButton, UiLink };

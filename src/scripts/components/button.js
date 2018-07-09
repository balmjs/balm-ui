import multiBootstrap from '../config/multi-bootstrap';
import UiButton from './button/button';
import UiLink from './button/link';
import UiIconButton from './button/icon-button';
import UiIconLink from './button/icon-link';
import UiFab from './button/fab';

const components = {
  UiButton,
  UiLink,
  UiIconButton,
  UiIconLink,
  UiFab
};

multiBootstrap(components);

export default components;
export {
  UiButton,
  UiLink,
  UiIconButton,
  UiIconLink,
  UiFab
};

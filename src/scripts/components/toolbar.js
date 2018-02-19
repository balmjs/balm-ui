import multiBootstrap from '../config/multi-bootstrap';
import UiToolbar from './toolbar/toolbar';
import UiToolbarRow from './toolbar/toolbar-row';
import UiToolbarSection from './toolbar/toolbar-section';
import UiToolbarTitle from './toolbar/toolbar-title';
import UiToolbarAnchor from './toolbar/icons/toolbar-anchor';
import UiToolbarSpan from './toolbar/icons/toolbar-span';
import UiToolbarButton from './toolbar/icons/toolbar-button';

const components = {
  UiToolbar,
  UiToolbarRow,
  UiToolbarSection,
  UiToolbarTitle,
  UiToolbarAnchor,
  UiToolbarSpan,
  UiToolbarButton
};

multiBootstrap(components);

export default components;
export {
  UiToolbar,
  UiToolbarRow,
  UiToolbarSection,
  UiToolbarTitle,
  UiToolbarAnchor,
  UiToolbarSpan,
  UiToolbarButton
};

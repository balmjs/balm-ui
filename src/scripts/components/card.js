import multiBootstrap from '../config/multi-bootstrap';
import UiCard from './card/card';
import UiCardContent from './card/card-content';
import UiCardMedia from './card/card-media';
import UiCardMediaContent from './card/card-media-content';
import UiCardActions from './card/card-actions';
import UiCardButtons from './card/card-buttons';
import UiCardIcons from './card/card-icons';

const components = {
  UiCard,
  UiCardContent,
  UiCardMedia,
  UiCardMediaContent,
  UiCardActions,
  UiCardButtons,
  UiCardIcons
};

multiBootstrap(components);

export default components;
export {
  UiCard,
  UiCardContent,
  UiCardMedia,
  UiCardMediaContent,
  UiCardActions,
  UiCardButtons,
  UiCardIcons
};

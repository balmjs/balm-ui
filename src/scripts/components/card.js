import multiBootstrap from '../config/multi-bootstrap';
import UiCard from './card/card';
import UiCardMedia from './card/content-blocks/card-media';
import UiCardHead from './card/content-blocks/card-head';
import UiCardTitle from './card/content-blocks/card-title';
import UiCardSubtitle from './card/content-blocks/card-subtitle';
import UiCardBody from './card/content-blocks/card-body';
import UiCardActions from './card/content-blocks/card-actions';
import UiCardHorizontalBlock from './card/horizontal-blocks/card-horizontal-block';
import UiCardMediaItem from './card/horizontal-blocks/card-media-item';

const components = {
  UiCard,
  UiCardMedia,
  UiCardHead,
  UiCardTitle,
  UiCardSubtitle,
  UiCardBody,
  UiCardActions,
  UiCardHorizontalBlock,
  UiCardMediaItem
};

multiBootstrap(components);

export default components;
export {
  UiCard,
  UiCardMedia,
  UiCardHead,
  UiCardTitle,
  UiCardSubtitle,
  UiCardBody,
  UiCardActions,
  UiCardHorizontalBlock,
  UiCardMediaItem
};

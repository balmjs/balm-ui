import multiBootstrap from '../config/multi-bootstrap';
import UiImageList from './image-list/image-list';
import UiImageItem from './image-list/image-item';
import UiImageLabel from './image-list/image-label';

const components = {
  UiImageList,
  UiImageItem,
  UiImageLabel
};

multiBootstrap(components);

export default components;
export {
  UiImageList,
  UiImageItem,
  UiImageLabel
};

import multiBootstrap from '../config/multi-bootstrap';
import UiListGroup from './list/list-group';
import UiListGroupSubheader from './list/list-group-subheader';
import UiList from './list/list';
import UiListDivider from './list/list-divider';
import UiItem from './list/item';
import UiItemStart from './list/item-start';
import UiItemText from './list/item-text';
import UiItemSubtext from './list/item-subtext';
import UiItemEnd from './list/item-end';
import UiItemDivider from './list/item-divider';
import UiListNav from './list/list-nav';
import UiItemLink from './list/item-link';

const components = {
  UiListGroup,
  UiListGroupSubheader,
  UiList,
  UiListDivider,
  UiItem,
  UiItemStart,
  UiItemText,
  UiItemSubtext,
  UiItemEnd,
  UiItemDivider,
  UiListNav,
  UiItemLink
};

multiBootstrap(components);

export default components;
export {
  UiListGroup,
  UiListGroupSubheader,
  UiList,
  UiListDivider,
  UiItem,
  UiItemStart,
  UiItemText,
  UiItemSubtext,
  UiItemEnd,
  UiItemDivider,
  UiListNav,
  UiItemLink
};

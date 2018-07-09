import multiBootstrap from '../config/multi-bootstrap';
import UiListGroup from './list/list-group';
import UiListGroupSubheader from './list/list-group-subheader';
import UiList from './list/list';
import UiListDivider from './list/list-divider';
import UiItem from './list/item';
import UiItemFirst from './list/item-first';
import UiItemText from './list/item-text';
import UiItemSubtext from './list/item-subtext';
import UiItemLast from './list/item-last';
import UiItemDivider from './list/item-divider';
import UiListNav from './list/list-nav';
import UiItemLink from './list/item-link';

const components = {
  UiListGroup,
  UiListGroupSubheader,
  UiList,
  UiListDivider,
  UiItem,
  UiItemFirst,
  UiItemText,
  UiItemSubtext,
  UiItemLast,
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
  UiItemFirst,
  UiItemText,
  UiItemSubtext,
  UiItemLast,
  UiItemDivider,
  UiListNav,
  UiItemLink
};

/**
 * Layout
 */
import UiPermanentDrawer from './scripts/components/drawer/permanent';
import UiPersistentDrawer from './scripts/components/drawer/persistent';
import UiTemporaryDrawer from './scripts/components/drawer/temporary';
import UiToolbar from './scripts/components/toolbar/toolbar';
import UiToolbarRow from './scripts/components/toolbar/toolbar-row';
import UiToolbarSection from './scripts/components/toolbar/toolbar-section';
import UiToolbarTitle from './scripts/components/toolbar/toolbar-title';
import UiToolbarAnchor from './scripts/components/toolbar/icons/toolbar-anchor';
import UiToolbarSpan from './scripts/components/toolbar/icons/toolbar-span';
import UiToolbarButton from './scripts/components/toolbar/icons/toolbar-button';
import UiGrid from './scripts/components/grid/grid';
import UiGridInner from './scripts/components/grid/grid-inner';
import UiCell from './scripts/components/grid/cell';
import UiTabs from './scripts/components/tabs/tabs';
import UiTabBar from './scripts/components/tabs/tab-bar';
import UiTabBarScroller from './scripts/components/tabs/tab-bar-scroller';
import UiTab from './scripts/components/tabs/tab';
import UiPanels from './scripts/components/tabs/panels';
import UiPanel from './scripts/components/tabs/panel';
/**
 * Common
 */
// import UiBadge from './scripts/components/common/badge';
import UiIcon from './scripts/components/icon';
import UiButton from './scripts/components/button/button';
import UiFab from './scripts/components/button/fab';
import UiIconToggle from './scripts/components/button/icon-toggle';
import UiCard from './scripts/components/card/card';
import UiCardMedia from './scripts/components/card/content-blocks/card-media';
import UiCardHead from './scripts/components/card/content-blocks/card-head';
import UiCardBody from './scripts/components/card/content-blocks/card-body';
import UiCardActions from './scripts/components/card/content-blocks/card-actions';
import UiCardHBlock from './scripts/components/card/horizontal-blocks/card-h-block';
import UiCardMediaItem from './scripts/components/card/horizontal-blocks/card-media-item';
import UiMenuAnchor from './scripts/components/menu/menu-anchor';
import UiMenu from './scripts/components/menu/menu';
import UiMenuItem from './scripts/components/menu/menuitem';
import UiLinearProgress from './scripts/components/linear-progress';
/**
 * Input Controls
 */
import UiFormField from './scripts/components/input-controls/form-field';
import UiTextfield from './scripts/components/input-controls/textfield/textfield';
import UiTextfieldHelptext from './scripts/components/input-controls/textfield/textfield-helptext';
import UiCheckbox from './scripts/components/input-controls/checkbox';
import UiRadio from './scripts/components/input-controls/radio';
import UiSelect from './scripts/components/input-controls/select';
import UiSelect2 from './scripts/components/input-controls/select2';
import UiSwitch from './scripts/components/input-controls/switch';
/**
 * Data
 */
import UiGridList from './scripts/components/grid-list/grid-list';
import UiGridTile from './scripts/components/grid-list/grid-tile';
import UiGridTileTitle from './scripts/components/grid-list/grid-tile-title';
import UiGridTileText from './scripts/components/grid-list/grid-tile-text';
import UiListGroup from './scripts/components/list/list-group';
import UiListGroupSubheader from './scripts/components/list/list-group-subheader';
import UiList from './scripts/components/list/list';
import UiListDivider from './scripts/components/list/list-divider';
import UiItem from './scripts/components/list/item';
import UiItemStart from './scripts/components/list/item-start';
import UiItemText from './scripts/components/list/item-text';
import UiItemSubtext from './scripts/components/list/item-subtext';
import UiItemEnd from './scripts/components/list/item-end';
import UiItemDivider from './scripts/components/list/item-divider';
import UiListNav from './scripts/components/list/list-nav';
import UiItemLink from './scripts/components/list/item-link';
// import UiTable from './components/data/table';
// import UiPagination from './components/data/pagination';
/**
 * Dialog
 */
import UiDialog from './scripts/components/dialog';
import UiSnackbar from './scripts/components/snackbar';
/**
 * Plugins
 */
import helper from './scripts/plugins/helper';
import event from './scripts/plugins/event';
import mixin from './scripts/plugins/mixin';
import alert from './scripts/plugins/alert';
import confirm from './scripts/plugins/confirm';
import toast from './scripts/plugins/toast';

const BalmUI_Components = {
  // Layout
  UiPermanentDrawer,
  UiPersistentDrawer,
  UiTemporaryDrawer,
  UiToolbar,
  UiToolbarRow,
  UiToolbarSection,
  UiToolbarTitle,
  UiToolbarAnchor,
  UiToolbarSpan,
  UiToolbarButton,
  UiGrid,
  UiGridInner,
  UiCell,
  UiTabs,
  UiTabBar,
  UiTabBarScroller,
  UiTab,
  UiPanels,
  UiPanel,
  // Common
  // UiBadge,
  UiIcon,
  UiButton,
  UiFab,
  UiCard,
  UiCardHead,
  UiCardMedia,
  UiCardMediaItem,
  UiCardBody,
  UiCardActions,
  UiCardHBlock,
  UiMenuAnchor,
  UiMenu,
  UiMenuItem,
  UiLinearProgress,
  // Form
  UiFormField,
  UiTextfield,
  UiTextfieldHelptext,
  UiCheckbox,
  UiRadio,
  UiIconToggle,
  UiSwitch,
  UiSelect,
  UiSelect2,
  // Data
  UiGridList,
  UiGridTile,
  UiGridTileTitle,
  UiGridTileText,
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
  UiItemLink,
  // UiTable,
  // UiPagination,
  // Popup
  UiDialog,
  UiSnackbar
};

const BalmUI_Plugins = {
  plugins: {
    helper,
    event,
    mixin,
    alert,
    confirm,
    toast
  }
};

const BalmUI_Register = {
  install(Vue) {
    document.querySelector('body').classList.add('mdc-typography');

    for (let key in BalmUI) {
      let component = BalmUI[key];
      if (component && component !== 'install' && component.name) {
        Vue.component(component.name, component);
      }
    }
  }
};

const BalmUI = Object.assign({}, BalmUI_Components, BalmUI_Plugins, BalmUI_Register);

// Auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI);
  for (let key in BalmUI.plugins) {
    window.Vue.use(BalmUI.plugins[key]);
  }
}

export default BalmUI;

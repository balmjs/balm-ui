/**
 * Layout
 */
import UiPermanentDrawer from './scripts/components/drawer/permanent';
import UiPersistentDrawer from './scripts/components/drawer/persistent';
import UiTemporaryDrawer from './scripts/components/drawer/temporary';
import UiToolbar from './scripts/components/toolbar/toolbar';
import UiToolbarRow from './scripts/components/toolbar/toolbar-row';
import UiToolbarSection from './scripts/components/toolbar/toolbar-section';
import UiGrid from './scripts/components/grid/grid';
import UiCell from './scripts/components/grid/cell';
import UiTabs from './scripts/components/tabs/tabs';
import UiTabBar from './scripts/components/tabs/tab-bar';
import UiTab from './scripts/components/tabs/tab';
import UiPanels from './scripts/components/tabs/panels';
import UiPanel from './scripts/components/tabs/panel';
/**
 * Common
 */
// import UiBadge from './scripts/components/common/badge';
import UiLink from './scripts/components/link';
import UiButton from './scripts/components/button';
import UiFab from './scripts/components/fab';
import UiCard from './scripts/components/card/card';
import UiCardPrimary from './scripts/components/card/card-primary';
import UiCardMedia from './scripts/components/card/card-media';
import UiCardMediaItem from './scripts/components/card/card-media-item';
import UiCardText from './scripts/components/card/card-text';
import UiCardActions from './scripts/components/card/card-actions';
import UiCardBlock from './scripts/components/card/card-block';
import UiMenuAnchor from './scripts/components/menu/menu-anchor';
import UiMenu from './scripts/components/menu/menu';
import UiMenuItem from './scripts/components/menu/menuitem';
/**
 * Form
 */
import UiFormField from './scripts/components/form/form-field';
import UiTextfield from './scripts/components/form/textfield';
import UiTextfieldHelptext from './scripts/components/form/textfield-helptext';
import UiCheckbox from './scripts/components/form/checkbox';
import UiRadio from './scripts/components/form/radio';
import UiIconToggle from './scripts/components/form/icon-toggle';
import UiSwitch from './scripts/components/form/switch';
import UiSelect from './scripts/components/form/select';
import UiSelect2 from './scripts/components/form/select2';
/**
 * Data
 */
import UiGridList from './scripts/components/list/grid-list';
import UiGridTile from './scripts/components/list/grid-tile';
import UiGridTileTitle from './scripts/components/list/grid-tile-title';
import UiGridTileText from './scripts/components/list/grid-tile-text';
import UiListGroup from './scripts/components/list/list-group';
import UiList from './scripts/components/list/list';
import UiListDivider from './scripts/components/list/list-divider';
import UiItem from './scripts/components/list/item';
import UiItemDivider from './scripts/components/list/item-divider';
import UiListNav from './scripts/components/list/list-nav';
// import UiTable from './components/data/table';
// import UiPagination from './components/data/pagination';
/**
 * Dialog
 */
import UiDialog from './scripts/components/dialog/dialog';
import UiSnackbar from './scripts/components/snackbar';
/**
 * Plugins
 */
import helper from './scripts/plugins/helper';
import event from './scripts/plugins/event';
import elevation from './scripts/plugins/elevation';
import theme from './scripts/plugins/theme';

const BalmUI = {
  // Layout
  UiPermanentDrawer,
  UiPersistentDrawer,
  UiTemporaryDrawer,
  UiToolbar,
  UiToolbarRow,
  UiToolbarSection,
  UiGrid,
  UiCell,
  UiTabs,
  UiTabBar,
  UiTab,
  UiPanels,
  UiPanel,
  // Common
  // UiBadge,
  UiLink,
  UiButton,
  UiFab,
  UiCard,
  UiCardPrimary,
  UiCardMedia,
  UiCardMediaItem,
  UiCardText,
  UiCardActions,
  UiCardBlock,
  UiMenuAnchor,
  UiMenu,
  UiMenuItem,
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
  UiList,
  UiListDivider,
  UiItem,
  UiItemDivider,
  UiListNav,
  // UiTable,
  // UiPagination,
  // Popup
  UiDialog,
  UiSnackbar,
  // Plugins
  plugins: {
    helper,
    event,
    elevation,
    theme
  },
  // Register
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

// Auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI);
  window.Vue.use(BalmUI.plugins.helper);
  window.Vue.use(BalmUI.plugins.event);
}

export default BalmUI;

// export {
//   // Layout
//   UiLayout,
//   UiNavigation,
//   UiGrid,
//   UiCell,
//   UiTabs,
//   UiPanel,
//   UiFooter,
//   UiMiniFooter,
//   // Common
//   UiBadge,
//   UiButton,
//   UiCard,
//   UiCardPrimary,
//   UiCardMedia,
//   UiCardText,
//   UiCardActions,
//   UiChip,
//   UiDivider,
//   UiLoading,
//   UiMenu,
//   UiMenuItem,
//   UiTooltip,
//   // Form
//   UiTextfield,
//   UiCheckbox,
//   UiRadio,
//   UiIconToggle,
//   UiSwitch,
//   UiSlider,
//   UiSelect,
//   UiAutocomplete,
//   UiDatepicker,
//   UiFileupload,
//   // Data
//   UiList,
//   UiItem,
//   UiTable,
//   UiPagination,
//   // Popup
//   UiDialog,
//   UiConfirm,
//   UiAlert,
//   UiSnackbar
// };

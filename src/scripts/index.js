import multiConfigure from './config/multi-configure';
/**
 * Helpers
 */
import * as BalmUI_Helpers from './helpers';
/**
 * Layout
 */
import UiPermanentDrawer from './components/drawer/permanent';
import UiPersistentDrawer from './components/drawer/persistent';
import UiTemporaryDrawer from './components/drawer/temporary';
import UiDrawerHeader from './components/drawer/drawer-header';
import UiDrawerToolbarSpacer from './components/drawer/drawer-toolbar-spacer';
import UiDrawerContent from './components/drawer/drawer-content';
import UiToolbar from './components/toolbar/toolbar';
import UiToolbarRow from './components/toolbar/toolbar-row';
import UiToolbarSection from './components/toolbar/toolbar-section';
import UiToolbarTitle from './components/toolbar/toolbar-title';
import UiToolbarAnchor from './components/toolbar/icons/toolbar-anchor';
import UiToolbarSpan from './components/toolbar/icons/toolbar-span';
import UiToolbarButton from './components/toolbar/icons/toolbar-button';
import UiTopAppBar from './components/toolbar/top-app-bar';
import UiGrid from './components/grid/grid';
import UiGridInner from './components/grid/grid-inner';
import UiGridCell from './components/grid/grid-cell';
import UiTabs from './components/tabs/tabs';
import UiTabBar from './components/tabs/tab-bar';
import UiTabBarScroller from './components/tabs/tab-bar-scroller';
import UiTab from './components/tabs/tab';
import UiPanels from './components/tabs/panels';
import UiPanel from './components/tabs/panel';
/**
 * Common
 */
import UiIcon from './components/common/icon';
import UiButton from './components/button/button';
import UiLink from './components/button/link';
import UiFab from './components/button/fab';
import UiIconButton from './components/button/icon-button';
import UiIconLink from './components/button/icon-link';
import UiIconToggle from './components/button/icon-toggle';
import UiMenuAnchor from './components/menu/menu-anchor';
import UiMenu from './components/menu/menu';
import UiMenuItem from './components/menu/menuitem';
import UiLinearProgress from './components/common/linear-progress';
/**
 * Input Controls
 */
import UiFormField from './components/input-controls/form-field';
import UiTextfield from './components/input-controls/textfield';
import UiTextfieldHelptext from './components/input-controls/textfield-helptext';
import UiCheckbox from './components/input-controls/checkbox';
import UiRadio from './components/input-controls/radio';
import UiSelect from './components/input-controls/select';
import UiSelectmenu from './components/input-controls/selectmenu';
import UiSwitch from './components/input-controls/switch';
import UiSlider from './components/input-controls/slider';
/**
 * Data
 */
import UiCard from './components/card/card';
import UiCardPrimaryAction from './components/card/card-primary-action';
import UiCardMedia from './components/card/card-media';
import UiCardMediaContent from './components/card/card-media-content';
import UiCardActions from './components/card/card-actions';
import UiCardButtons from './components/card/card-buttons';
import UiCardIcons from './components/card/card-icons';
import UiChipSet from './components/chips/chip-set';
import UiChip from './components/chips/chip';
import UiChipText from './components/chips/chip-text';
import UiChipLeadingIcon from './components/chips/chip-icon-leading';
import UiChipTrailingIcon from './components/chips/chip-icon-trailing';
import UiChipCheckmark from './components/chips/chip-checkmark';
import UiGridList from './components/grid-list/grid-list';
import UiGridTile from './components/grid-list/grid-tile';
import UiGridTileTitle from './components/grid-list/grid-tile-title';
import UiGridTileText from './components/grid-list/grid-tile-text';
import UiListGroup from './components/list/list-group';
import UiListGroupSubheader from './components/list/list-group-subheader';
import UiList from './components/list/list';
import UiListDivider from './components/list/list-divider';
import UiItem from './components/list/item';
import UiItemStart from './components/list/item-start';
import UiItemText from './components/list/item-text';
import UiItemSubtext from './components/list/item-subtext';
import UiItemEnd from './components/list/item-end';
import UiItemDivider from './components/list/item-divider';
import UiListNav from './components/list/list-nav';
import UiItemLink from './components/list/item-link';
import UiPagination from './components/data/pagination';
/**
 * Dialog
 */
import UiDialog from './components/dialog/dialog';
import UiDialogHeader from './components/dialog/dialog-header';
import UiDialogBody from './components/dialog/dialog-body';
import UiDialogFooter from './components/dialog/dialog-footer';
import UiSnackbar from './components/common/snackbar';
/**
 * Plugins
 */
import event from './plugins/event';
import elevation from './plugins/elevation';
import grid from './plugins/grid';
import theme from './plugins/theme';
import typography from './plugins/typography';
import alert from './plugins/alert';
import confirm from './plugins/confirm';
import toast from './plugins/toast';
import validator from './plugins/validator';
/**
 * Auto install
 */
import autoInstall from './config/auto-install';

const version = require('../../package.json').version;
const helpers = Object.assign({}, BalmUI_Helpers);

const components = {
  // Layout
  UiPermanentDrawer,
  UiPersistentDrawer,
  UiTemporaryDrawer,
  UiDrawerHeader,
  UiDrawerToolbarSpacer,
  UiDrawerContent,
  UiToolbar,
  UiToolbarRow,
  UiToolbarSection,
  UiToolbarTitle,
  UiToolbarAnchor,
  UiToolbarSpan,
  UiToolbarButton,
  UiTopAppBar,
  UiGrid,
  UiGridInner,
  UiGridCell,
  UiTabs,
  UiTabBar,
  UiTabBarScroller,
  UiTab,
  UiPanels,
  UiPanel,
  // Common
  UiIcon,
  UiButton,
  UiLink,
  UiFab,
  UiMenuAnchor,
  UiMenu,
  UiMenuItem,
  UiLinearProgress,
  // Input Controls
  UiFormField,
  UiTextfield,
  UiTextfieldHelptext,
  UiCheckbox,
  UiRadio,
  UiIconButton,
  UiIconLink,
  UiIconToggle,
  UiSelect,
  UiSelectmenu,
  UiSwitch,
  UiSlider,
  // Data
  UiCard,
  UiCardPrimaryAction,
  UiCardMedia,
  UiCardMediaContent,
  UiCardActions,
  UiCardButtons,
  UiCardIcons,
  UiChipSet,
  UiChip,
  UiChipText,
  UiChipLeadingIcon,
  UiChipTrailingIcon,
  UiChipCheckmark,
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
  UiPagination,
  // Dialog
  UiDialog,
  UiDialogHeader,
  UiDialogBody,
  UiDialogFooter,
  UiSnackbar
};

const plugins = {
  event,
  elevation,
  grid,
  theme,
  typography,
  alert,
  confirm,
  toast,
  validator
};

const registers = {
  install(Vue, options = {}) {
    // Configure the components' props
    multiConfigure(BalmUI.components, options);

    // Install the components
    for (let key in BalmUI.components) {
      let Component = BalmUI.components[key];
      Vue.component(Component.name, Component);
    }

    // Install the plugins
    for (let key in BalmUI.plugins) {
      let Plugin = BalmUI.plugins[key];
      if (options[`$${key}`]) {
        Vue.use(Plugin, options[`$${key}`]);
      } else {
        Vue.use(Plugin);
      }
    }
  }
};

const BalmUI = Object.assign({}, {
    version
  }, {
    helpers
  }, {
    components
  }, {
    plugins
  },
  registers
);

autoInstall(BalmUI);

export default BalmUI;
export {
  helpers
};

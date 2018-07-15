import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
// Layout
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
// Common
import UiIcon from './components/common/icon';
import UiButton from './components/button/button';
import UiLink from './components/button/link';
import UiFab from './components/button/fab';
import UiIconButton from './components/button/icon-button';
import UiIconLink from './components/button/icon-link';
import UiIconToggle from './components/button/icon-toggle';
import UiMenuAnchor from './components/menu/menu-anchor';
import UiMenu from './components/menu/menu';
import UiMenuitem from './components/menu/menuitem';
import UiLinearProgress from './components/common/linear-progress';
import UiShape from './components/common/shape';
// Data View
import UiCard from './components/card/card';
import UiCardContent from './components/card/card-content';
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
import UiGridTileSubtitle from './components/grid-list/grid-tile-subtitle';
import UiImageList from './components/image-list/image-list';
import UiImageItem from './components/image-list/image-item';
import UiImageLabel from './components/image-list/image-label';
import UiListGroup from './components/list/list-group';
import UiListGroupSubheader from './components/list/list-group-subheader';
import UiList from './components/list/list';
import UiListDivider from './components/list/list-divider';
import UiItem from './components/list/item';
import UiItemFirst from './components/list/item-first';
import UiItemText from './components/list/item-text';
import UiItemSubtext from './components/list/item-subtext';
import UiItemLast from './components/list/item-last';
import UiItemDivider from './components/list/item-divider';
import UiListNav from './components/list/list-nav';
import UiItemLink from './components/list/item-link';
import UiPagination from './components/data/pagination';
// Input Controls
import UiFormField from './components/input-controls/form-field';
import UiTextfield from './components/input-controls/textfield';
import UiTextfieldHelptext from './components/input-controls/textfield-helptext';
import UiTextfieldIcon from './components/input-controls/textfield-icon';
import UiCheckbox from './components/input-controls/checkbox';
import UiRadio from './components/input-controls/radio';
import UiSelect from './components/input-controls/select';
import UiSelectmenu from './components/input-controls/selectmenu';
import UiSwitch from './components/input-controls/switch';
import UiSlider from './components/input-controls/slider';
// Dialog
import UiDialog from './components/dialog/dialog';
import UiDialogHeader from './components/dialog/dialog-header';
import UiDialogBody from './components/dialog/dialog-body';
import UiDialogFooter from './components/dialog/dialog-footer';
import UiSnackbar from './components/common/snackbar';
/**
 * Plugins
 */
import event from './plugins/event';
import grid from './plugins/grid';
import typography from './plugins/typography';
import theme from './plugins/theme';
import elevation from './plugins/elevation';
import validator from './plugins/validator';
// import alert from './plugins/alert';
// import confirm from './plugins/confirm';
// import prompt from './plugins/prompt';
// import toast from './plugins/toast';
/**
 * Directives
 */
import vRipple from './directives/ripple';
/**
 * Utilities
 */
import * as utils from './utils';

const version = require('../../package.json').version;

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
  UiMenuitem,
  UiLinearProgress,
  UiShape,
  // Input Controls
  UiFormField,
  UiTextfield,
  UiTextfieldHelptext,
  UiTextfieldIcon,
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
  UiCardContent,
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
  UiGridTileSubtitle,
  UiImageList,
  UiImageItem,
  UiImageLabel,
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
  // alert,
  // confirm,
  // toast,
  validator
};

const directives = {
  vRipple
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
      if (options[key]) {
        Vue.use(Plugin, options[key]);
      } else {
        Vue.use(Plugin);
      }
    }

    // Init the directives
    for (let key in BalmUI.directives) {
      let Directive = BalmUI.directives[key];
      Vue.directive(Directive.name, Directive);
    }
  }
};

const BalmUI = Object.assign(
  {},
  { version },
  { components },
  { plugins },
  { directives },
  { utils },
  registers
);

autoInstall(BalmUI);

export default BalmUI;
export { utils };

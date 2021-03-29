import version from './version';
import autoInit from './config/auto-init';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
// General
import UiButton from './components/button/button';
import UiFab from './components/fab/fab';
import UiIconButton from './components/icon-button/icon-button';
import UiSegmentedButtons from './components/segmented-button/segmented-buttons';
import UiSegmentedButton from './components/segmented-button/segmented-button';
// Layouts
import UiTopAppBar from './components/top-app-bar/top-app-bar';
import UiGrid from './components/grid/grid';
import UiGridCell from './components/grid/grid-cell';
import UiDivider from './components/divider/divider'; // Custom
// Navigation
import UiDrawer from './components/drawer/drawer';
import UiDrawerHeader from './components/drawer/drawer-header';
import UiDrawerTitle from './components/drawer/drawer-title';
import UiDrawerSubtitle from './components/drawer/drawer-subtitle';
import UiDrawerContent from './components/drawer/drawer-content';
import UiDrawerAppContent from './components/drawer/drawer-app-content';
import UiDrawerBackdrop from './components/drawer/drawer-backdrop';
import UiTabs from './components/tabs/tabs';
import UiTabBar from './components/tabs/tab-bar';
import UiTabScroller from './components/tabs/tab-scroller';
import UiTabIndicator from './components/tabs/tab-indicator';
import UiTab from './components/tabs/tab';
import UiPanels from './components/tabs/panels';
import UiPanel from './components/tabs/panel';
import UiMenuAnchor from './components/menu/menu-anchor';
import UiMenu from './components/menu/menu';
import UiMenuitem from './components/menu/menuitem';
import UiMenuitemIcon from './components/menu/menuitem-icon';
import UiMenuitemText from './components/menu/menuitem-text';
import UiPagination from './components/pagination/pagination'; // Custom
// Theme
import UiIcon from './components/icon/icon';
// Data Entry
import UiForm from './components/form/form'; // Custom
import UiFormField from './components/form-field/form-field';
import UiTextfield from './components/textfield/textfield';
import UiTextfieldHelper from './components/textfield/textfield-helper';
import UiTextfieldIcon from './components/textfield/textfield-icon';
import UiSelect from './components/select/select';
import UiSelectHelper from './components/select/select-helper';
import UiSelectIcon from './components/select/select-icon';
import UiCheckbox from './components/checkbox/checkbox';
import UiRadio from './components/radio/radio';
import UiChips from './components/chips/chips';
import UiChip from './components/chips/chip';
import UiSwitch from './components/switch/switch';
import UiSlider from './components/slider/slider';
import UiFile from './components/file/file'; // Custom
// Data Display
import UiNav from './components/list/nav';
import UiNavItem from './components/list/nav-item';
import UiList from './components/list/list';
import UiItem from './components/list/item';
import UiItemTextContent from './components/list/item-text-content';
import UiItemText1 from './components/list/item-text1';
import UiItemText2 from './components/list/item-text2';
import UiItemFirstContent from './components/list/item-first-content';
import UiItemLastContent from './components/list/item-last-content';
import UiItemDivider from './components/list/item-divider';
import UiListDivider from './components/list/list-divider';
import UiListGroup from './components/list/list-group';
import UiListGroupSubheader from './components/list/list-group-subheader';
import UiImageList from './components/image-list/image-list';
import UiImageItem from './components/image-list/image-item';
import UiImageText from './components/image-list/image-text';
import UiCard from './components/card/card';
import UiCardContent from './components/card/card-content';
import UiCardMedia from './components/card/card-media';
import UiCardMediaContent from './components/card/card-media-content';
import UiCardText from './components/card/card-text';
import UiCardActions from './components/card/card-actions';
import UiCardButtons from './components/card/card-buttons';
import UiCardIcons from './components/card/card-icons';
import UiTable from './components/table/table';
import UiBadge from './components/badge/badge'; // Custom
// Feedback
import UiDialog from './components/dialog/dialog';
import UiDialogTitle from './components/dialog/dialog-title';
import UiDialogContent from './components/dialog/dialog-content';
import UiDialogActions from './components/dialog/dialog-actions';
import UiSnackbar from './components/snackbar/snackbar';
import UiBanner from './components/banner/banner';
import UiProgress from './components/progress/progress';
import UiSpinner from './components/spinner/spinner';
import UiTooltip from './components/tooltip/tooltip';
/**
 * Plugins
 */
import $event, { useBus } from './plugins/event'; // Custom
import $store, { useStore } from './plugins/store'; // Custom
import $grid, { useGrid } from './plugins/grid';
import $theme, { useTheme } from './plugins/theme';
import $typography, { useTypography } from './plugins/typography';
import $validator from './plugins/validator'; // Custom
/**
 * Directives
 */
import vRipple from './directives/ripple';
import vShape from './directives/shape';
import vShadow from './directives/elevation';
import vAccessibility from './directives/a11y';
import vBadge from './directives/badge'; // Custom
import vTooltip from './directives/tooltip';
/**
 * Utilities
 */
import types from './utils/types';
import helpers from './utils/helpers';
import detectIE from './utils/ie';

const components = {
  UiBadge,
  UiBanner,
  UiButton,
  UiCard,
  UiCardActions,
  UiCardButtons,
  UiCardContent,
  UiCardMedia,
  UiCardMediaContent,
  UiCardText,
  UiCardIcons,
  UiCheckbox,
  UiChip,
  UiChips,
  UiDialog,
  UiDialogActions,
  UiDialogContent,
  UiDialogTitle,
  UiDivider,
  UiDrawer,
  UiDrawerHeader,
  UiDrawerTitle,
  UiDrawerSubtitle,
  UiDrawerContent,
  UiDrawerAppContent,
  UiDrawerBackdrop,
  UiFab,
  UiFile,
  UiForm,
  UiFormField,
  UiGrid,
  UiGridCell,
  UiIcon,
  UiIconButton,
  UiImageItem,
  UiImageList,
  UiImageText,
  UiItem,
  UiItemTextContent,
  UiItemText1,
  UiItemText2,
  UiItemFirstContent,
  UiItemLastContent,
  UiItemDivider,
  UiList,
  UiListDivider,
  UiListGroup,
  UiListGroupSubheader,
  UiMenuAnchor,
  UiMenu,
  UiMenuitem,
  UiMenuitemIcon,
  UiMenuitemText,
  UiNav,
  UiNavItem,
  UiPagination,
  UiPanels,
  UiPanel,
  UiProgress,
  UiRadio,
  UiSegmentedButton,
  UiSegmentedButtons,
  UiSelect,
  UiSelectHelper,
  UiSelectIcon,
  UiSlider,
  UiSnackbar,
  UiSpinner,
  UiSwitch,
  UiTable,
  UiTabs,
  UiTabBar,
  UiTabScroller,
  UiTabIndicator,
  UiTab,
  UiTextfield,
  UiTextfieldHelper,
  UiTextfieldIcon,
  UiTooltip,
  UiTopAppBar
};

const plugins = {
  $event,
  $grid,
  $store,
  $theme,
  $typography,
  $validator
};

const directives = {
  vAccessibility,
  vBadge,
  vRipple,
  vShadow,
  vShape,
  vTooltip
};

function install(Vue, options = {}) {
  // Configure the components' props
  multiConfigure(components, options);

  // Install the components
  for (let key in components) {
    let Component = components[key];
    Vue.component(Component.name, Component);
  }

  // Install the plugins
  for (let key in plugins) {
    let Plugin = plugins[key];
    options[key] ? Vue.use(Plugin, options[key]) : Vue.use(Plugin);
  }

  // Init the directives
  for (let key in directives) {
    let Directive = directives[key];
    Vue.directive(Directive.name, Directive);
  }
}

const BalmUI = {
  version,
  install
};

autoInit(BalmUI);

export default BalmUI;
export { version, install };
export {
  UiBadge,
  UiBanner,
  UiButton,
  UiCard,
  UiCardActions,
  UiCardButtons,
  UiCardContent,
  UiCardMedia,
  UiCardMediaContent,
  UiCardText,
  UiCardIcons,
  UiCheckbox,
  UiChip,
  UiChips,
  UiDialog,
  UiDialogActions,
  UiDialogContent,
  UiDialogTitle,
  UiDivider,
  UiDrawer,
  UiDrawerHeader,
  UiDrawerTitle,
  UiDrawerSubtitle,
  UiDrawerContent,
  UiDrawerAppContent,
  UiDrawerBackdrop,
  UiFab,
  UiFile,
  UiForm,
  UiFormField,
  UiGrid,
  UiGridCell,
  UiIcon,
  UiIconButton,
  UiImageItem,
  UiImageList,
  UiImageText,
  UiItem,
  UiItemTextContent,
  UiItemText1,
  UiItemText2,
  UiItemFirstContent,
  UiItemLastContent,
  UiItemDivider,
  UiList,
  UiListDivider,
  UiListGroup,
  UiListGroupSubheader,
  UiMenuAnchor,
  UiMenu,
  UiMenuitem,
  UiMenuitemIcon,
  UiMenuitemText,
  UiNav,
  UiNavItem,
  UiPagination,
  UiPanels,
  UiPanel,
  UiProgress,
  UiRadio,
  UiSegmentedButton,
  UiSegmentedButtons,
  UiSelect,
  UiSelectHelper,
  UiSelectIcon,
  UiSlider,
  UiSnackbar,
  UiSpinner,
  UiSwitch,
  UiTable,
  UiTabs,
  UiTabBar,
  UiTabScroller,
  UiTabIndicator,
  UiTab,
  UiTextfield,
  UiTextfieldHelper,
  UiTextfieldIcon,
  UiTooltip,
  UiTopAppBar
};
export { $event, $grid, $store, $theme, $typography, $validator };
export { useBus, useStore, useGrid, useTheme, useTypography };
export { vAccessibility, vBadge, vRipple, vShadow, vShape, vTooltip };
export { types, helpers, detectIE };

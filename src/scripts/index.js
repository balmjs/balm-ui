import packageJson from '../../package.json';
import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
// General
import UiButton from './components/buttons/button';
import UiFab from './components/buttons/fab';
import UiIconButton from './components/buttons/icon-button';
import UiSegmentedButtons from './components/buttons/segmented-buttons';
import UiSegmentedButton from './components/buttons/segmented-button';
// Layouts
import UiTopAppBar from './components/app-bars/top-app-bar';
import UiGrid from './components/layout-grid/grid';
import UiGridCell from './components/layout-grid/grid-cell';
import UiDivider from './components/others/divider'; // Custom
// Navigation
import UiDrawer from './components/navigation/drawer';
import UiDrawerHeader from './components/navigation/drawer-header';
import UiDrawerTitle from './components/navigation/drawer-title';
import UiDrawerSubtitle from './components/navigation/drawer-subtitle';
import UiDrawerContent from './components/navigation/drawer-content';
import UiDrawerAppContent from './components/navigation/drawer-app-content';
import UiDrawerBackdrop from './components/navigation/drawer-backdrop';
import UiTabs from './components/tabs/tabs';
import UiTabBar from './components/tabs/tab-bar';
import UiTabScroller from './components/tabs/tab-scroller';
import UiTabIndicator from './components/tabs/tab-indicator';
import UiTab from './components/tabs/tab';
import UiPanels from './components/tabs/panels';
import UiPanel from './components/tabs/panel';
import UiMenuAnchor from './components/menus/menu-anchor';
import UiMenu from './components/menus/menu';
import UiMenuitem from './components/menus/menuitem';
import UiMenuitemIcon from './components/menus/menuitem-icon';
import UiMenuitemText from './components/menus/menuitem-text';
import UiPagination from './components/data-tables/pagination'; // Custom
// Theme
import UiIcon from './components/icon/icon';
// Data Entry
import UiForm from './components/form-controls/form'; // Custom
import UiFormField from './components/form-controls/form-field';
import UiTextfield from './components/input-controls/textfield';
import UiTextfieldHelper from './components/input-controls/textfield-helper';
import UiTextfieldIcon from './components/input-controls/textfield-icon';
import UiSelect from './components/selection-controls/select';
import UiSelectHelper from './components/selection-controls/select-helper';
import UiSelectIcon from './components/selection-controls/select-icon';
import UiCheckbox from './components/selection-controls/checkbox';
import UiRadio from './components/selection-controls/radio';
import UiChips from './components/chips/chips';
import UiChip from './components/chips/chip';
import UiSwitch from './components/selection-controls/switch';
import UiSlider from './components/selection-controls/slider';
import UiFile from './components/selection-controls/file'; // Custom
// Data Display
import UiNav from './components/lists/nav';
import UiNavItem from './components/lists/nav-item';
import UiList from './components/lists/list';
import UiItem from './components/lists/item';
import UiItemTextContent from './components/lists/item-text-content';
import UiItemText1 from './components/lists/item-text1';
import UiItemText2 from './components/lists/item-text2';
import UiItemFirstContent from './components/lists/item-first-content';
import UiItemLastContent from './components/lists/item-last-content';
import UiItemDivider from './components/lists/item-divider';
import UiListDivider from './components/lists/list-divider';
import UiListGroup from './components/lists/list-group';
import UiListGroupSubheader from './components/lists/list-group-subheader';
import UiImageList from './components/image-lists/image-list';
import UiImageItem from './components/image-lists/image-item';
import UiImageText from './components/image-lists/image-text';
import UiCard from './components/cards/card';
import UiCardContent from './components/cards/card-content';
import UiCardMedia from './components/cards/card-media';
import UiCardMediaContent from './components/cards/card-media-content';
import UiCardText from './components/cards/card-text';
import UiCardActions from './components/cards/card-actions';
import UiCardButtons from './components/cards/card-buttons';
import UiCardIcons from './components/cards/card-icons';
import UiTable from './components/data-tables/table';
import UiBadge from './components/others/badge'; // Custom
// Feedback
import UiDialog from './components/modal/dialog';
import UiDialogTitle from './components/modal/dialog-title';
import UiDialogContent from './components/modal/dialog-content';
import UiDialogActions from './components/modal/dialog-actions';
import UiSnackbar from './components/modal/snackbar';
import UiBanner from './components/modal/banner';
import UiProgress from './components/progress-indicators/progress';
import UiSpinner from './components/progress-indicators/spinner';
import UiTooltip from './components/others/tooltip';
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

const BalmUI = {
  version: packageJson.version,
  install(Vue, options = {}) {
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
      if (options[key]) {
        Vue.use(Plugin, options[key]);
      } else {
        Vue.use(Plugin);
      }
    }

    // Init the directives
    for (let key in directives) {
      let Directive = directives[key];
      Vue.directive(Directive.name, Directive);
    }
  }
};

autoInstall(BalmUI);

export default BalmUI;
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

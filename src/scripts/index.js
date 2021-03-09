import version from './version';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
// General
import UiButton from './components/buttons/button.vue';
import UiFab from './components/buttons/fab.vue';
import UiIconButton from './components/buttons/icon-button.vue';
import UiSegmentedButtons from './components/buttons/segmented-buttons.vue';
import UiSegmentedButton from './components/buttons/segmented-button.vue';
// Layouts
import UiTopAppBar from './components/app-bars/top-app-bar.vue';
import UiGrid from './components/layout-grid/grid.vue';
import UiGridCell from './components/layout-grid/grid-cell.vue';
import UiDivider from './components/others/divider.vue'; // Custom
// Navigation
import UiDrawer from './components/navigation/drawer.vue';
import UiDrawerHeader from './components/navigation/drawer-header.vue';
import UiDrawerTitle from './components/navigation/drawer-title.vue';
import UiDrawerSubtitle from './components/navigation/drawer-subtitle.vue';
import UiDrawerContent from './components/navigation/drawer-content.vue';
import UiDrawerAppContent from './components/navigation/drawer-app-content.vue';
import UiDrawerBackdrop from './components/navigation/drawer-backdrop.vue';
import UiTabs from './components/tabs/tabs.vue';
import UiTabBar from './components/tabs/tab-bar.vue';
import UiTabScroller from './components/tabs/tab-scroller.vue';
import UiTabIndicator from './components/tabs/tab-indicator.vue';
import UiTab from './components/tabs/tab.vue';
import UiPanels from './components/tabs/panels.vue';
import UiPanel from './components/tabs/panel.vue';
import UiMenuAnchor from './components/menus/menu-anchor.vue';
import UiMenu from './components/menus/menu.vue';
import UiMenuitem from './components/menus/menuitem.vue';
import UiMenuitemIcon from './components/menus/menuitem-icon.vue';
import UiMenuitemText from './components/menus/menuitem-text.vue';
import UiPagination from './components/data-tables/pagination.vue'; // Custom
// Theme
import UiIcon from './components/icon/icon.vue';
// Data Entry
import UiForm from './components/form-controls/form.vue'; // Custom
import UiFormField from './components/form-controls/form-field.vue';
import UiTextfield from './components/input-controls/textfield.vue';
import UiTextfieldHelper from './components/input-controls/textfield-helper.vue';
import UiTextfieldIcon from './components/input-controls/textfield-icon.vue';
import UiSelect from './components/selection-controls/select.vue';
import UiSelectHelper from './components/selection-controls/select-helper.vue';
import UiSelectIcon from './components/selection-controls/select-icon.vue';
import UiCheckbox from './components/selection-controls/checkbox.vue';
import UiRadio from './components/selection-controls/radio.vue';
import UiChips from './components/chips/chips.vue';
import UiChip from './components/chips/chip.vue';
import UiSwitch from './components/selection-controls/switch.vue';
import UiSlider from './components/selection-controls/slider.vue';
import UiFile from './components/selection-controls/file.vue'; // Custom
// Data Display
import UiNav from './components/lists/nav.vue';
import UiNavItem from './components/lists/nav-item.vue';
import UiList from './components/lists/list.vue';
import UiItem from './components/lists/item.vue';
import UiItemTextContent from './components/lists/item-text-content.vue';
import UiItemText1 from './components/lists/item-text1.vue';
import UiItemText2 from './components/lists/item-text2.vue';
import UiItemFirstContent from './components/lists/item-first-content.vue';
import UiItemLastContent from './components/lists/item-last-content.vue';
import UiItemDivider from './components/lists/item-divider.vue';
import UiListDivider from './components/lists/list-divider.vue';
import UiListGroup from './components/lists/list-group.vue';
import UiListGroupSubheader from './components/lists/list-group-subheader.vue';
import UiImageList from './components/image-lists/image-list.vue';
import UiImageItem from './components/image-lists/image-item.vue';
import UiImageText from './components/image-lists/image-text.vue';
import UiCard from './components/cards/card.vue';
import UiCardContent from './components/cards/card-content.vue';
import UiCardMedia from './components/cards/card-media.vue';
import UiCardMediaContent from './components/cards/card-media-content.vue';
import UiCardText from './components/cards/card-text.vue';
import UiCardActions from './components/cards/card-actions.vue';
import UiCardButtons from './components/cards/card-buttons.vue';
import UiCardIcons from './components/cards/card-icons.vue';
import UiTable from './components/data-tables/table.vue';
import UiBadge from './components/others/badge.vue'; // Custom
// Feedback
import UiDialog from './components/modal/dialog.vue';
import UiDialogTitle from './components/modal/dialog-title.vue';
import UiDialogContent from './components/modal/dialog-content.vue';
import UiDialogActions from './components/modal/dialog-actions.vue';
import UiSnackbar from './components/modal/snackbar.vue';
import UiBanner from './components/modal/banner.vue';
import UiProgress from './components/progress-indicators/progress.vue';
import UiSpinner from './components/progress-indicators/spinner.vue';
import UiTooltip from './components/others/tooltip.vue';
/**
 * Plugins
 */
import $event, { useEvent, useBus } from './plugins/event'; // Custom
import $store, { useStore } from './plugins/store'; // Custom
import $grid, { useGrid } from './plugins/grid';
import $theme, { useTheme } from './plugins/theme';
import $typography, { useTypography } from './plugins/typography';
import $validator, { useValidator } from './plugins/validator'; // Custom
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

function install(app, options = {}) {
  // Configure the components' props
  multiConfigure(components, options);

  // Install the components
  for (let key in components) {
    let Component = components[key];
    app.component(Component.name, Component);
  }

  // Install the plugins
  for (let key in plugins) {
    let Plugin = plugins[key];
    if (options[key]) {
      app.use(Plugin, options[key]);
    } else {
      app.use(Plugin);
    }
  }

  // Init the directives
  for (let key in directives) {
    let Directive = directives[key];
    app.directive(Directive.name, Directive);
  }
}

const BalmUI = {
  version,
  install
};

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
export {
  useEvent,
  useBus,
  useGrid,
  useStore,
  useTheme,
  useTypography,
  useValidator
};
export { vAccessibility, vBadge, vRipple, vShadow, vShape, vTooltip };
export { types, helpers, detectIE };

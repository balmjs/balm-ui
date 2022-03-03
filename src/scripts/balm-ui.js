import version from './version';
import autoInstall from './config/auto-install';
/**
 * Components
 */
// Theme
import UiIcon from './components/icon/icon.vue';
// General
import UiButton from './components/button/button.vue';
import UiFab from './components/fab/fab.vue';
import UiIconButton from './components/icon-button/icon-button.vue';
import UiSegmentedButtons from './components/segmented-button/segmented-buttons.vue';
import UiSegmentedButton from './components/segmented-button/segmented-button.vue';
// Layouts
import UiTopAppBar from './components/top-app-bar/top-app-bar.vue';
import UiGrid from './components/grid/grid.vue';
import UiGridCell from './components/grid/grid-cell.vue';
import UiDivider from './components/divider/divider.vue'; // Custom
// Navigation
import UiDrawer from './components/drawer/drawer.vue';
import UiDrawerHeader from './components/drawer/drawer-header.vue';
import UiDrawerTitle from './components/drawer/drawer-title.vue';
import UiDrawerSubtitle from './components/drawer/drawer-subtitle.vue';
import UiDrawerContent from './components/drawer/drawer-content.vue';
import UiDrawerAppContent from './components/drawer/drawer-app-content.vue';
import UiTabs from './components/tabs/tabs.vue';
import UiTabBar from './components/tabs/tab-bar.vue';
import UiTabScroller from './components/tabs/tab-scroller.vue';
import UiTabIndicator from './components/tabs/tab-indicator.vue';
import UiTab from './components/tabs/tab.vue';
import UiPanels from './components/tabs/panels.vue';
import UiPanel from './components/tabs/panel.vue';
import UiMenuAnchor from './components/menu/menu-anchor.vue';
import UiMenu from './components/menu/menu.vue';
import UiMenuitem from './components/menu/menuitem.vue';
import UiMenuitemIcon from './components/menu/menuitem-icon.vue';
import UiMenuitemText from './components/menu/menuitem-text.vue';
import UiMenuitemDivider from './components/menu/menuitem-divider.vue';
import UiPagination from './components/pagination/pagination.vue'; // Custom
// Data Entry
import UiForm from './components/form/form.vue'; // Custom
import UiFormField from './components/form-field/form-field.vue';
import UiTextfield from './components/textfield/textfield.vue';
import UiTextfieldHelper from './components/textfield/textfield-helper.vue';
import UiTextfieldIcon from './components/textfield/textfield-icon.vue';
import UiAutocomplete from './components/autocomplete/autocomplete.vue'; // Custom
import UiDatepicker from './components/datepicker/datepicker.vue'; // Custom
import UiRangepicker from './components/rangepicker/rangepicker.vue'; // Custom
import UiSelect from './components/select/select.vue';
import UiSelectHelper from './components/select/select-helper.vue';
import UiSelectIcon from './components/select/select-icon.vue';
import UiCheckbox from './components/checkbox/checkbox.vue';
import UiRadio from './components/radio/radio.vue';
import UiChips from './components/chips/chips.vue';
import UiChip from './components/chips/chip.vue';
import UiSwitch from './components/switch/switch.vue';
import UiSlider from './components/slider/slider.vue';
import UiFile from './components/file/file.vue'; // Custom
// Data Display
import UiNav from './components/list/nav.vue';
import UiNavItem from './components/list/nav-item.vue';
import UiList from './components/list/list.vue';
import UiItem from './components/list/item.vue';
import UiItemTextContent from './components/list/item-text-content.vue';
import UiItemText1 from './components/list/item-text1.vue';
import UiItemText2 from './components/list/item-text2.vue';
import UiItemFirstContent from './components/list/item-first-content.vue';
import UiItemLastContent from './components/list/item-last-content.vue';
import UiItemDivider from './components/list/item-divider.vue';
import UiListDivider from './components/list/list-divider.vue';
import UiListGroup from './components/list/list-group.vue';
import UiListGroupSubheader from './components/list/list-group-subheader.vue';
import UiImageList from './components/image-list/image-list.vue';
import UiImageItem from './components/image-list/image-item.vue';
import UiImageText from './components/image-list/image-text.vue';
import UiCard from './components/card/card.vue';
import UiCardContent from './components/card/card-content.vue';
import UiCardMedia from './components/card/card-media.vue';
import UiCardMediaContent from './components/card/card-media-content.vue';
import UiCardText from './components/card/card-text.vue';
import UiCardActions from './components/card/card-actions.vue';
import UiCardButtons from './components/card/card-buttons.vue';
import UiCardIcons from './components/card/card-icons.vue';
import UiTable from './components/table/table.vue';
import UiBadge from './components/badge/badge.vue'; // Custom
// Feedback
import UiDialog from './components/dialog/dialog.vue';
import UiDialogTitle from './components/dialog/dialog-title.vue';
import UiDialogContent from './components/dialog/dialog-content.vue';
import UiDialogActions from './components/dialog/dialog-actions.vue';
import UiSnackbar from './components/snackbar/snackbar.vue';
import UiBanner from './components/banner/banner.vue';
import UiProgress from './components/progress/progress.vue';
import UiSpinner from './components/spinner/spinner.vue';
import UiTooltipAnchor from './components/tooltip/tooltip-anchor.vue';
import UiTooltip from './components/tooltip/tooltip.vue';
/**
 * Plugins
 */
import $event, { useEvent, useBus } from './plugins/event'; // Custom
import $store, { useStore } from './plugins/store'; // Custom
import $grid, { useGrid } from './plugins/grid';
import $theme, { useTheme } from './plugins/theme';
import $typography, { useTypography } from './plugins/typography';
import $alert, { useAlert } from './plugins/alert'; // Custom
import $confirm, { useConfirm } from './plugins/confirm'; // Custom
import $toast, { useToast } from './plugins/toast'; // Custom
import $validator, { useValidator } from './plugins/validator'; // Custom
/**
 * Directives
 */
import vButton from './directives/button';
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

const Components = {
  UiAutocomplete,
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
  UiDatepicker,
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
  UiMenuitemDivider,
  UiNav,
  UiNavItem,
  UiPagination,
  UiPanels,
  UiPanel,
  UiProgress,
  UiRadio,
  UiRangepicker,
  UiSegmentedButtons,
  UiSegmentedButton,
  UiSelect,
  UiSelectHelper,
  UiSelectIcon,
  UiSlider,
  UiSnackbar,
  UiSpinner,
  UiSwitch,
  UiTable,
  UiTabs,
  UiTab,
  UiTabBar,
  UiTabScroller,
  UiTabIndicator,
  UiTextfield,
  UiTextfieldHelper,
  UiTextfieldIcon,
  UiTooltipAnchor,
  UiTooltip,
  UiTopAppBar
};

const Plugins = {
  $alert,
  $confirm,
  $event,
  $grid,
  $store,
  $theme,
  $toast,
  $typography,
  $validator
};

const Directives = {
  vAccessibility,
  vBadge,
  vButton,
  vRipple,
  vShadow,
  vShape,
  vTooltip
};

const install = (Vue, options = {}) =>
  autoInstall(Vue, options, {
    Components,
    Plugins,
    Directives
  });

const BalmUI = {
  install
};

export default BalmUI;
export { version, install };
export {
  UiAutocomplete,
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
  UiDatepicker,
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
  UiMenuitemDivider,
  UiNav,
  UiNavItem,
  UiPagination,
  UiPanels,
  UiPanel,
  UiProgress,
  UiRadio,
  UiRangepicker,
  UiSegmentedButtons,
  UiSegmentedButton,
  UiSelect,
  UiSelectHelper,
  UiSelectIcon,
  UiSlider,
  UiSnackbar,
  UiSpinner,
  UiSwitch,
  UiTable,
  UiTabs,
  UiTab,
  UiTabBar,
  UiTabScroller,
  UiTabIndicator,
  UiTextfield,
  UiTextfieldHelper,
  UiTextfieldIcon,
  UiTooltipAnchor,
  UiTooltip,
  UiTopAppBar
};
export {
  $alert,
  $confirm,
  $event,
  $grid,
  $store,
  $theme,
  $toast,
  $typography,
  $validator
};
export {
  useAlert,
  useBus,
  useConfirm,
  useEvent,
  useGrid,
  useStore,
  useTheme,
  useToast,
  useTypography,
  useValidator
};
export { vAccessibility, vBadge, vButton, vRipple, vShadow, vShape, vTooltip };
export { types, helpers, detectIE };

import type { DefineComponent, Plugin, Directive } from '@vue/runtime-core';
import type {
  AlertDialog,
  EventBus,
  ConfirmDialog,
  BalmUIEvent,
  Grid,
  Store,
  Theme,
  Toast,
  Typography,
  Validator,
  ThemeColor,
  AlertOptions,
  ConfirmOptions,
  ToastOptions,
  Validations
} from './typings/plugins';
import { Types, Helpers, detectIE } from './typings/utils';
import {
  UiIconProperties,
  UiButtonProperties,
  UiFabProperties,
  UiIconButtonProperties,
  UiSegmentedButtonsProperties,
  UiTopAppBarProperties,
  UiGridProperties,
  UiGridCellProperties,
  UiDividerProperties,
  UiDrawerProperties,
  UiTabIndicatorProperties,
  UiMenuAnchorProperties,
  UiMenuProperties,
  UiPaginationProperties,
  UiFormProperties,
  UiFormFieldProperties,
  UiTextfieldProperties,
  UiTextfieldHelperProperties,
  UiAutocompleteProperties,
  UiDatepickerProperties,
  UiRangepickerProperties,
  UiSelectProperties,
  UiChipsProperties,
  UiSwitchProperties,
  UiSliderProperties,
  UiFileProperties,
  UiDialogProperties,
  UiDialogTitleProperties,
  UiDialogActionsProperties,
  UiSnackbarProperties,
  UiBannerProperties,
  UiSpinnerProperties,
  UiTooltipProperties
} from './typings/components';

export type BalmUIOptions = {
  UiIcon?: UiIconProperties;
  UiButton?: UiButtonProperties;
  UiFab?: UiFabProperties;
  UiIconButton?: UiIconButtonProperties;
  UiSegmentedButtons?: UiSegmentedButtonsProperties;
  UiTopAppBar?: UiTopAppBarProperties;
  UiGrid?: UiGridProperties;
  UiGridCell?: UiGridCellProperties;
  UiDivider?: UiDividerProperties;
  UiDrawer?: UiDrawerProperties;
  UiTabIndicator?: UiTabIndicatorProperties;
  UiMenuAnchor?: UiMenuAnchorProperties;
  UiMenu?: UiMenuProperties;
  UiPagination?: UiPaginationProperties;
  UiForm?: UiFormProperties;
  UiFormField?: UiFormFieldProperties;
  UiTextfield?: UiTextfieldProperties;
  UiTextfieldHelper?: UiTextfieldHelperProperties;
  UiAutocomplete?: UiAutocompleteProperties;
  UiDatepicker?: UiDatepickerProperties;
  UiRangepicker?: UiRangepickerProperties;
  UiSelect?: UiSelectProperties;
  UiChips?: UiChipsProperties;
  UiSwitch?: UiSwitchProperties;
  UiSlider?: UiSliderProperties;
  UiFile?: UiFileProperties;
  UiDialog?: UiDialogProperties;
  UiDialogTitle?: UiDialogTitleProperties;
  UiDialogActions?: UiDialogActionsProperties;
  UiSnackbar?: UiSnackbarProperties;
  UiBanner?: UiBannerProperties;
  UiSpinner?: UiSpinnerProperties;
  UiTooltip?: UiTooltipProperties;
  $store?: any;
  $theme?: ThemeColor;
  $typography?: string[];
  $alert?: AlertOptions;
  $confirm?: ConfirmOptions;
  $toast?: ToastOptions;
  $validator?: Validations;
};

declare module 'balm-ui' {
  type component = DefineComponent<{}, {}, any>;

  const BalmUI: Plugin;

  const version: string;
  const install: typeof BalmUI.install;

  const UiAutocomplete: component;
  const UiBadge: component;
  const UiBanner: component;
  const UiButton: component;
  const UiCard: component;
  const UiCardActions: component;
  const UiCardButtons: component;
  const UiCardContent: component;
  const UiCardMedia: component;
  const UiCardMediaContent: component;
  const UiCardText: component;
  const UiCardIcons: component;
  const UiCheckbox: component;
  const UiChip: component;
  const UiChips: component;
  const UiDatepicker: component;
  const UiDialog: component;
  const UiDialogActions: component;
  const UiDialogContent: component;
  const UiDialogTitle: component;
  const UiDivider: component;
  const UiDrawer: component;
  const UiDrawerHeader: component;
  const UiDrawerTitle: component;
  const UiDrawerSubtitle: component;
  const UiDrawerContent: component;
  const UiDrawerAppContent: component;
  const UiFab: component;
  const UiFile: component;
  const UiForm: component;
  const UiFormField: component;
  const UiGrid: component;
  const UiGridCell: component;
  const UiIcon: component;
  const UiIconButton: component;
  const UiImageItem: component;
  const UiImageList: component;
  const UiImageText: component;
  const UiItem: component;
  const UiItemTextContent: component;
  const UiItemText1: component;
  const UiItemText2: component;
  const UiItemFirstContent: component;
  const UiItemLastContent: component;
  const UiItemDivider: component;
  const UiList: component;
  const UiListDivider: component;
  const UiListGroup: component;
  const UiListGroupSubheader: component;
  const UiMenuAnchor: component;
  const UiMenu: component;
  const UiMenuitem: component;
  const UiMenuitemIcon: component;
  const UiMenuitemText: component;
  const UiMenuitemDivider: component;
  const UiNav: component;
  const UiNavItem: component;
  const UiPagination: component;
  const UiPanels: component;
  const UiPanel: component;
  const UiProgress: component;
  const UiRadio: component;
  const UiRangepicker: component;
  const UiSegmentedButtons: component;
  const UiSegmentedButton: component;
  const UiSelect: component;
  const UiSelectHelper: component;
  const UiSelectIcon: component;
  const UiSlider: component;
  const UiSnackbar: component;
  const UiSpinner: component;
  const UiSwitch: component;
  const UiTable: component;
  const UiTabs: component;
  const UiTab: component;
  const UiTabBar: component;
  const UiTabScroller: component;
  const UiTabIndicator: component;
  const UiTextfield: component;
  const UiTextfieldHelper: component;
  const UiTextfieldIcon: component;
  const UiTooltipAnchor: component;
  const UiTooltip: component;
  const UiTopAppBar: component;

  const $event: Plugin;
  const $store: Plugin;
  const $grid: Plugin;
  const $theme: Plugin;
  const $typography: Plugin;
  const $alert: Plugin;
  const $confirm: Plugin;
  const $toast: Plugin;
  const $validator: Plugin;

  const useAlert: () => AlertDialog;
  const useBus: () => EventBus;
  const useConfirm: () => ConfirmDialog;
  const useEvent: () => BalmUIEvent;
  const useGrid: () => Grid;
  const useStore: () => Store;
  const useTheme: () => Theme;
  const useToast: () => Toast;
  const useTypography: () => Typography;
  const useValidator: () => Validator;

  const vAccessibility: Directive;
  const vBadge: Directive;
  const vButton: Directive;
  const vRipple: Directive;
  const vShadow: Directive;
  const vShape: Directive;
  const vTooltip: Directive;

  const types: Types;
  const helpers: Helpers;

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
    $event,
    $store,
    $grid,
    $theme,
    $typography,
    $alert,
    $confirm,
    $toast,
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
  export {
    vAccessibility,
    vBadge,
    vButton,
    vRipple,
    vShadow,
    vShape,
    vTooltip
  };
  export { types, helpers, detectIE };
}

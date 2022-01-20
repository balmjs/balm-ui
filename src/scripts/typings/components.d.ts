declare type UiIconType = 'filled' | 'outlined' | 'round' | 'twoTone' | 'sharp';

export declare interface UiIconProperties {
  type?: UiIconType;
  outlined?: boolean;
  round?: boolean;
  twoTone?: boolean;
  sharp?: boolean;
  size?: number | string;
  dark?: boolean;
  light?: boolean;
  inactive?: boolean;
}

/**
 * General
 */

declare type UiButtonType = 'text' | 'outlined' | 'raised' | 'unelevated';

declare type ButtonType = 'submit' | 'reset' | 'button';

export declare interface UiButtonProperties {
  type?: UiButtonType;
  outlined?: boolean;
  raised?: boolean;
  unelevated?: boolean;
  nativeType?: ButtonType;
}

declare type UiFabType = 'regular' | 'extended';

export declare interface UiFabProperties {
  type?: UiFabType;
  extended?: boolean;
  mini?: boolean;
  exited?: boolean;
}

declare type ToggleState = {
  on: string;
  off: string;
};

export declare interface UiIconButtonProperties {
  toggle?: ToggleState;
}

export declare interface UiSegmentedButtonsProperties {
  singleSelect?: boolean;
}

/**
 * Layouts
 */

declare type UiTopAppBarType =
  | 'nonRegular'
  | 'standard'
  | 'fixed'
  | 'dense'
  | 'prominent'
  | 'prominentDense'
  | 'short'
  | 'shortCollapsed';

export declare interface UiTopAppBarProperties {
  type?: UiTopAppBarType;
  fixed?: boolean;
  dense?: boolean;
  prominent?: boolean;
  prominentDense?: boolean;
  short?: boolean;
  shortCollapsed?: boolean;
}

declare type UiGridPosition = 'left' | 'right';

export declare interface UiGridProperties {
  fixedColumnWidth?: boolean;
  position?: UiGridPosition;
}

declare type UiGridCellNumberOfColumns =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;
declare type UiGridCellIndex = 0 | UiGridCellNumberOfColumns;
declare type UiGridCellPosition = 'top' | 'middle' | 'bottom';

export declare interface UiGridCellProperties {
  columns?: UiGridCellNumberOfColumns;
  order?: UiGridCellIndex;
  align?: UiGridCellPosition;
}

declare type UiDividerType = 'horizontal' | 'vertical';

export declare interface UiDividerProperties {
  type?: UiDividerType;
}

/**
 * Navigation
 */

declare type UiDrawerType = 'permanent' | 'dismissible' | 'modal';

export declare interface UiDrawerProperties {
  type?: UiDrawerType;
  viewportHeight?: boolean;
}

declare type UiTabIndicatorType = 'underline' | 'icon';

export declare interface UiTabIndicatorProperties {
  type?: UiTabIndicatorType;
  fade?: boolean;
}

declare type UiMenuAnchorPosition =
  | 'top left'
  | 'top right'
  | 'middle left'
  | 'middle right'
  | 'bottom left'
  | 'bottom right';

export declare interface UiMenuAnchorProperties {
  position?: UiMenuAnchorPosition;
  absolute?: boolean;
}

declare type UiMenuPosition =
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM_LEFT'
  | 'BOTTOM_RIGHT'
  | 'TOP_START'
  | 'TOP_END'
  | 'BOTTOM_START'
  | 'BOTTOM_END';

export declare interface UiMenuProperties {
  quickOpen?: boolean;
  position?: UiMenuPosition;
  fixed?: boolean;
  fullwidth?: boolean;
}

declare type UiPaginationPosition = 'left' | 'center' | 'right';

export declare interface UiPaginationProperties {
  pageSpan?: number | false;
  showTotal?: boolean;
  pageSize?: number;
  pageSizeText?: string | string[];
  ofText?: string;
  showJumper?: boolean;
  jumperText?: string | string[];
  jumperButtonOutlined?: boolean;
  jumperButtonText?: string;
  position?: UiPaginationPosition;
  mini?: boolean;
}

/**
 * Data Entry
 */

declare type UiFormType = 'horizontal' | 'vertical';
declare type UiFormAlign = 'left' | 'center' | 'right';

export declare interface UiFormProperties {
  type?: UiFormType;
  nowrap?: boolean;
  labelTopAligned?: boolean;
  labelRightAligned?: boolean;
  labelTopRightAligned?: boolean;
  // form items
  itemMarginBottom?: string | number;
  actionAlign?: UiFormAlign;
  // horizontal form
  labelWidth?: string | number;
  labelMarginRight?: string | number;
  // vertical form
  labelMarginBottom?: string | number;
}

export declare interface UiFormFieldProperties {
  nowrap?: boolean;
  alignEnd?: boolean;
  spaceBetween?: boolean;
}

declare type UiTextfieldType = 'filled' | 'outlined';
declare type TextfieldType =
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | 'textarea';

export declare interface UiTextfieldProperties {
  type?: UiTextfieldType;
  outlined?: boolean;
  inputType?: TextfieldType;
  rows?: number | string;
  cols?: number | string;
  withCounter?: boolean;
}

export declare interface UiTextfieldHelperProperties {
  withCounter?: boolean;
}

declare type OptionFormat = {
  label: string;
  value: string;
};

export declare interface UiAutocompleteProperties {
  outlined?: boolean;
  sourceFormat?: OptionFormat;
  autofocus?: boolean;
  delay?: number | string;
  minlength?: number | string;
  highlight?: boolean;
}

export declare interface UiDatepickerProperties {
  outlined?: boolean;
  toggle?: boolean;
  clear?: boolean;
}

export declare interface UiRangepickerProperties {
  outlined?: boolean;
  placeholders?: string[];
  labels?: string[];
}

declare type UiSelectType = UiTextfieldType;

export declare interface UiSelectProperties {
  type?: UiSelectType;
  outlined?: boolean;
  optionFormat?: OptionFormat;
  defaultLabel?: string;
  defaultValue?: string | number;
  required?: boolean;
  fullwidth?: boolean;
  withLeadingIcon?: boolean;
}

declare type UiChipsType = 'action' | 'input' | 'choice' | 'filter';

export declare interface UiChipsProperties {
  type?: UiChipsType;
  optionFormat?: OptionFormat;
}

export declare interface UiSwitchProperties {
  trueValue?: true | number | string;
  falseValue?: false | number | string;
}

declare type UiSliderType = 'continuous' | 'discrete';

export declare interface UiSliderProperties {
  type?: UiSliderType;
  discrete?: boolean;
  withTickMarks?: boolean;
}

export declare interface UiFileProperties {
  accept?: string;
  multiple?: boolean;
  outlined?: boolean;
  text?: string;
  preview?: boolean;
}

/**
 * Data Display
 */

/**
 * Feedback
 */

export declare interface UiDialogProperties {
  escapeKey?: boolean;
  closable?: boolean;
  maskClosable?: boolean;
  noScrim?: boolean;
  resetScroll?: boolean;
  scrollable?: boolean;
  stacked?: boolean;
  fullscreen?: boolean;
}

export declare interface UiDialogTitleProperties {
  closable?: boolean;
}

export declare interface UiDialogActionsProperties {
  acceptText?: string;
  cancelText?: string;
}

declare type UiSnackbarPosition = 'top' | 'bottom' | 'center';

export declare interface UiSnackbarProperties {
  actionType?: number;
  timeoutMs?: number | string;
  actionButtonText?: string;
  stacked?: boolean;
  leading?: boolean;
  position?: UiSnackbarPosition;
}

export declare interface UiBannerProperties {
  centered?: boolean;
  fixed?: boolean;
  withImage?: boolean;
  mobileStacked?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

declare type UiSpinnerSize = 'large' | 'medium' | 'small';

export declare interface UiSpinnerProperties {
  size?: UiSpinnerSize;
  fourColored?: boolean;
}

declare type UiTooltipType = 'plain' | 'rich';

export declare interface UiTooltipProperties {
  type?: UiTooltipType;
  rich?: boolean;
  width?: string | number;
}

/**
 * Plus
 */

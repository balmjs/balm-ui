import { ComponentInternalInstance } from '@vue/runtime-core';

export declare interface BalmUIEvent {
  onChange(property: string, value: any, fn?: Function);

  onOpen(property: string, fn?: Function);
  onShow(property: string, fn?: Function);

  onClose(property: string, fn?: Function);
  onHide(property: string, fn?: Function);
}

export declare interface EventBus {
  on: (eventName: string | string[], callback: Function) => void;
  off: (eventName?: string | string[]) => void;
  emit: (eventName: string, ...args) => void;
}

declare type Throttle = (oldEvent: string, newEvent: string) => void;

export declare type Store = ComponentInternalInstance;

declare type GridProperty = 'margin' | 'gutter' | 'column-width';
declare type GridSize = 'desktop' | 'tablet' | 'phone';

export declare interface Grid {
  set: (property: GridProperty, size: GridSize, value: string) => void;
}

export declare type ThemeColor = {
  primary?: string;
  secondary?: string;
  background?: string;
  surface?: string;
  error?: string;
  'on-primary'?: string;
  'on-secondary'?: string;
  'on-surface'?: string;
  'on-error'?: string;
};

declare type ThemeColorStyle =
  | 'primary'
  | 'secondary'
  | 'background'
  | 'surface'
  | 'error'
  | 'on-primary'
  | 'on-secondary'
  | 'on-surface'
  | 'on-error';

declare type ThemeClassStyle = ThemeColorStyle | 'primary-bg' | 'secondary-bg';

declare type TextStyle = 'primary' | 'secondary' | 'hint' | 'disabled' | 'icon';

declare type ThemeTone = 'background' | 'light' | 'dark';

export declare interface Theme {
  primary(color: string): void;
  secondary(color: string): void;
  background(color: string): void;
  surface(color: string): void;
  error(color: string): void;
  onPrimary(color: string): void;
  onSecondary(color: string): void;
  onSurface(color: string): void;
  onError(color: string): void;

  colors(color: ThemeColor): void;

  getThemeColor(style: ThemeColorStyle): string;
  getThemeClass(style: ThemeClassStyle): string;

  getTextColor(style: TextStyle, tone: ThemeTone): string;
  getTextClass(style: TextStyle, tone: ThemeTone): string;
  setTextColor(style: TextStyle, value: string): void;

  getTextColorOnLight(style: TextStyle): string;
  getTextClassOnLight(style: TextStyle): string;
  getTextColorOnDark(style: TextStyle): string;
  getTextClassOnDark(style: TextStyle): string;
  setTextColorOnLight(style: TextStyle, value: string): void;
  setTextColorOnDark(style: TextStyle, value: string): void;
}

declare type TypographyStyle =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'headline6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | string;

export declare type Typography = (style: TypographyStyle) => string;

declare type Message = string;

declare interface DialogOptions {
  className?: string;
  title?: string;
  state?: 'success' | 'info' | 'warning' | 'error' | 'help';
  stateOutlined?: boolean;
  message: Message;
  raw?: boolean;
  callback?: false | Function;
}

export declare interface AlertOptions {
  clone(dialogOptions: DialogOptions): DialogOptions;
  buttonText?: string;
}

export declare type AlertDialog = (
  options: Message | AlertOptions
) => Promise<void>;

export declare interface ConfirmOptions {
  clone(dialogOptions: DialogOptions): DialogOptions;
  acceptText?: string;
  cancelText?: string;
}

export declare type ConfirmDialog = (
  options: Message | ConfirmOptions
) => Promise<void>;

export declare interface ToastOptions {
  className?: string;
  timeoutMs?: number;
  message: Message;
  position?: 'bottom' | 'center' | 'top';
}

export declare type Toast = (options: Message | ToastOptions) => void;

declare interface ValidationResult {
  valid: boolean;
  validFields: string[];
  invalidFields: string[];
  message: string;
  messages: string[];
  validMsg: { [fieldName: string]: string };
}

export declare interface Validator {
  validate(
    formData: { [fieldName: string]: any },
    customFieldset?: string[]
  ): ValidationResult;
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $bus: EventBus;
    $throttle: Throttle;
    $store: Store;
    $grid: Grid;
    $theme: Theme;
    $tt: Typography;
    $alert: AlertDialog;
    $confirm: ConfirmDialog;
    $toast: Toast;
  }
}

declare interface ValidationRule {
  label?: string;
  validate(fieldValue: any, formData?: { [fieldName: string]: any }): boolean;
  message: string;
}

export declare type Validations = {
  [validationRuleName: string]: ValidationRule;
};

import { ComponentInternalInstance } from '@vue/runtime-core';

export interface BalmUIEvent {
  onChange(property: string, value: any, fn?: Function);

  onOpen(property: string, fn?: Function);
  onShow(property: string, fn?: Function);

  onClose(property: string, fn?: Function);
  onHide(property: string, fn?: Function);
}

export interface EventBus {
  on: (eventName: string | string[], callback: Function) => void;
  off: (eventName?: string | string[]) => void;
  emit: (eventName: string, ...args) => void;
}

type Throttle = (oldEvent: string, newEvent: string) => void;

export type Store = ComponentInternalInstance;

type GridProperty = 'margin' | 'gutter' | 'column-width';
type GridSize = 'desktop' | 'tablet' | 'phone';

export interface Grid {
  set: (property: GridProperty, size: GridSize, value: string) => void;
}

type ThemeColor = {
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

type ThemeColorStyle =
  | 'primary'
  | 'secondary'
  | 'background'
  | 'surface'
  | 'error'
  | 'on-primary'
  | 'on-secondary'
  | 'on-surface'
  | 'on-error';

type ThemeClassStyle = ThemeColorStyle | 'primary-bg' | 'secondary-bg';

type TextStyle = 'primary' | 'secondary' | 'hint' | 'disabled' | 'icon';

type ThemeTone = 'background' | 'light' | 'dark';

export interface Theme {
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

type TypographyStyle =
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

export type Typography = (style: TypographyStyle) => string;

type Message = string;

interface DialogOptions {
  className?: string;
  title?: string;
  state?: 'success' | 'info' | 'warning' | 'error' | 'help';
  stateOutlined?: boolean;
  message: Message;
  raw?: boolean;
  callback?: false | Function;
}

interface AlertOptions {
  clone(dialogOptions: DialogOptions): DialogOptions;
  buttonText?: string;
}

export type AlertDialog = (options: Message | AlertOptions) => Promise<void>;

interface ConfirmOptions {
  clone(dialogOptions: DialogOptions): DialogOptions;
  acceptText?: string;
  cancelText?: string;
}

export type ConfirmDialog = (
  options: Message | ConfirmOptions
) => Promise<void>;

interface ToastOptions {
  className?: string;
  timeoutMs?: number;
  message: Message;
  position?: 'bottom' | 'center' | 'top';
}

export type Toast = (options: Message | ToastOptions) => void;

interface BalmUIValidationResult {
  valid: boolean;
  validFields: string[];
  invalidFields: string[];
  message: string;
  messages: string[];
  validMsg: { [fieldName: string]: string };
}

export interface Validator {
  validate(
    formData: { [fieldName: string]: any },
    customFieldset?: string[]
  ): BalmUIValidationResult;
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

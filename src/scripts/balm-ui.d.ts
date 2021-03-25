import type {
  App,
  DefineComponent,
  ComponentOptionsMixin,
  ComponentPropsOptions
} from 'vue';

export type VueApp = App;

export type VueComponent = ReturnType<typeof DefineComponent>;

export type VueComponentProps = ComponentPropsOptions;

export interface LooseObject {
  [key: string]: any;
}

export interface DefaultPropsObject {
  componentProps: LooseObject;
  propName: string;
  props: LooseObject;
}

export interface Mixin extends ComponentOptionsMixin {}

export interface CommonPropsObject {
  componentMixins: Mixin[];
  propName: string;
  props: LooseObject;
}

export type VueClassName = {
  [className: string]: boolean;
};

// declare module '*.vue' {
//   import { ComponentOptions } from 'vue';
//   const component: ComponentOptions;
//   export default component;
// }

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: ReturnType<typeof DefineComponent>;
  export default component;
}

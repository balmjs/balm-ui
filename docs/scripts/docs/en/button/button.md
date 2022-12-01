## Button component

```html
<ui-button><!-- the button text label --></ui-button>
```

### Props

| Name         | Type    | Default    | Description                                                             |
| ------------ | ------- | ---------- | ----------------------------------------------------------------------- |
| `type`       | string  | `'text'`   | Mandatory. Button types.                                                |
| `outlined`   | boolean | `false`    | Optional. Styles an outlined button that is flush with the surface.     |
| `raised`     | boolean | `false`    | Optional. Styles a contained button that is elevated above the surface. |
| `unelevated` | boolean | `false`    | Optional. Styles a contained button that is flush with the surface.     |
| `icon`       | string  | `''`       | Optional. Indicates an icon element. See [Material Icons](/icons) list. |
| `disabled`   | boolean | `false`    | The `<button>` native attribute. To disable a button.                   |
| `nativeType` | string  | `'button'` | The `<button>` native attribute.                                        |

```ts
interface UiButton {
  type?: 'text' | 'outlined' | 'raised' | 'unelevated';
  nativeType?: 'button' | 'submit' | 'reset';
}
```

### Slots

| Name      | Props       | Description                                                          |
| --------- | ----------- | -------------------------------------------------------------------- |
| `default` |             | The default slot holds the button or link text and can contain HTML. |
| `before`  | `iconClass` | Custom leading icon                                                  |
| `after`   | `iconClass` | Custom trailing icon                                                 |

```html
<template #after="{ iconClass }">
  <ui-icon :class="iconClass">ICON</ui-icon>
</template>
```

### Events

| Name    | Type                      | Description                       |
| ------- | ------------------------- | --------------------------------- |
| `click` | `function(event: object)` | Emits when the button is clicked. |

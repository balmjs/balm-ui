```html
<ui-icon-button></ui-icon-button>
```

### Props

| Name                     | Type    | Default | Description                                                              |
| ------------------------ | ------- | ------- | ------------------------------------------------------------------------ |
| `modelValue` (`v-model`) | boolean | `false` | Sets the toggle state.                                                   |
| `icon`                   | string  | `''`    | A material icon of the icon button. See [Material Icons](/#/icons) list. |
| `toggle`                 | object  | `{}`    | Two icons of the icon button toggle. (Format: `{on, off}`)               |

- Configuring the toggle button states by `toggle.on` and `toggle.off` props

  ```ts
  interface IconButton {
    toggle: {
      on: string;
      off: string;
    };
  }
  ```

### Slots

| Name      | Props                 | Description                                                                  |
| --------- | --------------------- | ---------------------------------------------------------------------------- |
| `default` | `onClass`, `offClass` | The default slot holds the toggle or link custom icons and can contain HTML. |

```html
<template #default="{ onClass, offClass }">
  <i :class="onClass">ON</i>
  <i :class="offClass">OFF</i>
</template>
```

### Events

| Name                | Type                       | Description                            |
| ------------------- | -------------------------- | -------------------------------------- |
| `click`             | `function(event: object)`  | Emits when the icon button is clicked. |
| `update:modelValue` | `function(value: boolean)` | Emits when the icon button is toggled. |

> NOTE: If you are not using `v-model`, you should listen for the icon button using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-icon-button v-model="value"></ui-icon-button>
  ```

- Manual

  ```html
  <ui-icon-button
    :model-value="value"
    @update:modelValue="balmUI.onChange('value', $event)"
  ></ui-icon-button>
  ```

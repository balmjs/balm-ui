```html
<ui-icon-button></ui-icon-button>
```

### Props

| Name                | Type    | Default | Description                                                                   |
| ------------------- | ------- | ------- | ----------------------------------------------------------------------------- |
| `model` (`v-model`) | boolean | `false` | Sets the toggle state.                                                        |
| `icon`              | string  | `''`    | A material icon of the icon button. See [Material Icons](/#/icons) list.      |
| `toggle`            | object  | `{}`    | Two material icons of the toggle button. See [Material Icons](/#/icons) list. |

- Configuring the toggle button states by `toggle.on` and `toggle.off` props

  ```ts
  interface toggle {
    on: string;
    off: string;
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

| Name     | Type                       | Description                            |
| -------- | -------------------------- | -------------------------------------- |
| `click`  | `function(event: object)`  | Emits when the icon button is clicked. |
| `change` | `function(model: boolean)` | Emits when the icon button is toggled. |

> NOTE: If you are not using `v-model`, you should listen for the icon button using `@change` and update the `model` prop.

- Automatic

  ```html
  <ui-icon-button v-model="value"></ui-icon-button>
  ```

- Manual

  ```html
  <ui-icon-button
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-icon-button>
  ```

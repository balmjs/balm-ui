```html
<ui-icon-button></ui-icon-button>

<ui-icon-a></ui-icon-a>
```

#### Props

| Name                | Type    | Default | Description                                                               |
| ------------------- | ------- | ------- | ------------------------------------------------------------------------- |
| `model` (`v-model`) | boolean | `false` | Sets the toggle state.                                                    |
| `icon`              | string  | `null`  | A material icon of the icon button. See [Material Icons](/#/icons) list.  |
| `toggle`            | object  | `{}`    | Two icons of the icon button toggle. (Format: `{on, off}`)                |
| `url`               | string  | `null`  | The _href_ attribute of the `<a>`. Applicable only for the `<ui-icon-a>`. |

> Configuring the icon button toggle states by `toggle.on` and `toggle.off` props.

#### Slots

| Name      | Slots                   | Description                                                                  |
| --------- | ----------------------- | ---------------------------------------------------------------------------- |
| `default` | `{ onClass, offClass }` | The default slot holds the toggle or link custom icons and can contain HTML. |

```html
<template #default="{ onClass, offClass }">
  <i :class="onClass">ON</i>
  <i :class="offClass">OFF</i>
</template>
```

#### Events

| Name     | Type                       | Description                            |
| -------- | -------------------------- | -------------------------------------- |
| `click`  | `function(event: object)`  | Emits when the icon button is clicked. |
| `change` | `function(model: boolean)` | Emits when the icon button is toggled. |

> NOTE: If you are not using `v-model`, you should listen for the icon button using `@change` and update the `model` prop.

```html
// Automatic
<ui-icon-button v-model="value"></ui-icon-button>

// Manual
<ui-icon-button
  :model="value"
  @change="$balmUI.onChange('value', $event)"
></ui-icon-button>
```

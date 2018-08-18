```html
<ui-icon-button><!-- the toggle default icon --></ui-icon-button>
<ui-icon-link><!-- the link icon --></ui-icon-link>
```

#### Props

| Name            | Type      | Default | Description                                                                  |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------- |
| model (v-model) | `Boolean` | `false` | Sets the toggle state.                                                       |
| icon            | `String`  | `null`  | A material icon of the icon button. See [Material Icons](/#/icons) list.     |
| toggle          | `Object`  | `null`  | Two icons of the icon button toggle. (Format: `{on, off}`)                   |
| url             | `String`  | `null`  | The _href_ attribute of the `<a>`. Applicable only for the `<ui-icon-link>`. |

> Configuring the icon button toggle states by `toggle.on` and `toggle.off` props.

#### Slots

| Name      | Description                                                          | `slot-scope`            |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| (default) | The default slot holds the toggle or link icon and can contain HTML. | `{ onClass, offClass }` |

```html
<template slot-scope="{ onClass, offClass }">
  <i :class="onClass">ON</i>
  <i :class="offClass">OFF</i>
</template>
```

#### Events

| Name   | Type                       | Description                            |
| ------ | -------------------------- | -------------------------------------- |
| change | `Function(model: boolean)` | Emits when the icon button is toggled. |

> NOTE: If you are not using `v-model`, you should listen for the icon button using `@change` and update the `model` prop.

```html
// Automatic
<ui-icon-button v-model="value"></ui-icon-button>

// Manual
<ui-icon-button :model="value" @change="$balmUI.onChange('value', $event)"></ui-icon-button>
```

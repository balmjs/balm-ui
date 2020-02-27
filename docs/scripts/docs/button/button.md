```html
<ui-button><!-- the button text label --></ui-button>

<ui-a><!-- the anchor text label --></ui-a>
```

### `<ui-button>` Types

- `0`: `'text'`
- `1`: `'outlined'`
- `2`: `'raised'`
- `3`: `'unelevated'`

#### Props

| Name         | Type           | Default | Description                                                                       |
| ------------ | -------------- | ------- | --------------------------------------------------------------------------------- |
| `type`       | string, number | `0`     | Mandatory. Button types.                                                          |
| `outlined`   | boolean        | `false` | Optional. Styles an outlined button that is flush with the surface.               |
| `raised`     | boolean        | `false` | Optional. Styles a contained button that is elevated above the surface.           |
| `unelevated` | boolean        | `false` | Optional. Styles a contained button that is flush with the surface.               |
| `icon`       | string         | `''`    | Optional. Indicates an icon element. See [Material Icons](/#/icons) list.         |
| `disabled`   | boolean        | `false` | To disable a button, add the `disabled` attribute directly to the `<button>`.     |
| `url`        | string         | `null`  | Applicable only for the `<ui-a>`, add the `href` attribute directly to the `<a>`. |

#### Slots

| Name      | Slots       | Description                                                          |
| --------- | ----------- | -------------------------------------------------------------------- |
| `default` |             | The default slot holds the button or link text and can contain HTML. |
| `before`  | `iconClass` | Custom leading icon                                                  |
| `after`   | `iconClass` | Custom trailing icon                                                 |

```html
<template #after="{ iconClass }">
  <ui-icon :class="iconClass">ICON</ui-icon>
</template>
```

#### Events

| Name    | Type                      | Description                       |
| ------- | ------------------------- | --------------------------------- |
| `click` | `function(event: object)` | Emits when the button is clicked. |

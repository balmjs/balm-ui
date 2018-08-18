```html
<ui-button><!-- the button text --></ui-button>
<ui-link><!-- the link text --></ui-link>
```

#### Props

| Name       | Type      | Default | Description                                                               |
| ---------- | --------- | ------- | ------------------------------------------------------------------------- |
| raised     | `Boolean` | `false` | Optional. Styles a contained button that is elevated above the surface.   |
| unelevated | `Boolean` | `false` | Optional. Styles a contained button that is flush with the surface.       |
| outlined   | `Boolean` | `false` | Optional. Styles an outlined button that is flush with the surface.       |
| dense      | `Boolean` | `false` | Optional. Makes the button text and container slightly smaller.           |
| icon       | `String`  | `''`    | Optional. Indicates an icon element. See [Material Icons](/#/icons) list. |
| disabled   | `Boolean` | `false` | To disable a button.                                                      |
| cssOnly    | `Boolean` | `false` | Ripple effect is disabled.                                                |
| url        | `String`  | `null`  | The _href_ attribute of the `<a>`. Applicable only for the `<ui-link>`.   |

#### Slots

| Name      | Description                                                          | `slot-scope`    |
| --------- | -------------------------------------------------------------------- | --------------- |
| (default) | The default slot holds the button or link text and can contain HTML. | `{ iconClass }` |

```html
<template slot-scope="{ iconClass }">
  <ui-icon :class="iconClass">ICON</ui-icon>
</template>
```

#### Events

| Name  | Type                      | Description                       |
| ----- | ------------------------- | --------------------------------- |
| click | `Function(event: object)` | Emits when the button is clicked. |

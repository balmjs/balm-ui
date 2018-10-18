```html
<ui-fab><!-- Icon --></ui-fab>
<ui-fab extended><!-- Text label --></ui-fab>
```

#### Props

| Name     | Type      | Default | Description                                                                                      |
| -------- | --------- | ------- | ------------------------------------------------------------------------------------------------ |
| icon     | `String`  | `''`    | Mandatory, for the icon element. See [Material Icons](/#/icons) usage.                           |
| mini     | `Boolean` | `false` | Optional, modifies the FAB to a smaller size                                                     |
| extended | `Boolean` | `false` | Optional, modifies the FAB to wider size which includes a text label.                            |
| exited   | `Boolean` | `false` | Optional, animates the FAB out of view. When this class is removed, the FAB will return to view. |
| cssOnly  | `Boolean` | `false` | Ripple effect is disabled.                                                                       |

#### Slots

| Name      | Description                                                           | `slot-scope`    |
| --------- | --------------------------------------------------------------------- | --------------- |
| (default) | The default slot holds the floating action button icon or text label. | `{ iconClass }` |
| before    | The label slot holds the label text of the extended FAB.              | `{ iconClass }` |
| after     | The label slot holds the label text of the extended FAB.              | `{ iconClass }` |

> NOTE: the default slot has not `slot-scope` in the extended FAB.

```html
<ui-fab>
  <template slot-scope="{ iconClass }">
    <ui-icon :class="iconClass">ICON</ui-icon>
  </template>
</ui-fab>

<ui-fab extended>
  <template slot="before" slot-scope="{ iconClass }">
    <ui-icon :class="iconClass">ICON</ui-icon>
  </template>
  Text label
</ui-fab>
```

#### Events

| Name  | Type                      | Description                                       |
| ----- | ------------------------- | ------------------------------------------------- |
| click | `Function(event: object)` | Emits when the floating action button is clicked. |

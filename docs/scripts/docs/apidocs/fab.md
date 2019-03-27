```html
<ui-fab><!-- Icon --></ui-fab>
<ui-fab extended><!-- Text label --></ui-fab>
```

#### Props

| Name       | Type    | Default | Description                                                                                      |
| ---------- | ------- | ------- | ------------------------------------------------------------------------------------------------ |
| `icon`     | string  | `''`    | Mandatory, for the icon element. See [Material Icons](/#/icons) usage.                           |
| `mini`     | boolean | `false` | Optional, modifies the FAB to a smaller size                                                     |
| `extended` | boolean | `false` | Optional, modifies the FAB to wider size which includes a text label.                            |
| `exited`   | boolean | `false` | Optional, animates the FAB out of view. When this class is removed, the FAB will return to view. |
| `cssOnly`  | boolean | `false` | Ripple effect is disabled.                                                                       |

#### Slots

| Name      | Slots           | Description                                                           |
| --------- | --------------- | --------------------------------------------------------------------- |
| `default` | `{ iconClass }` | The default slot holds the floating action button icon or text label. |
| `before`  | `{ iconClass }` | The label slot holds the label text of the extended FAB.              |
| `after`   | `{ iconClass }` | The label slot holds the label text of the extended FAB.              |

> NOTE: the default slot has not `slot-scope` in the extended FAB.

```html
<ui-fab>
  <template #default="{ iconClass }">
    <ui-icon :class="iconClass">ICON</ui-icon>
  </template>
</ui-fab>

<ui-fab extended>
  <template #before="{ iconClass }">
    <ui-icon :class="iconClass">ICON</ui-icon>
  </template>
  Text label
</ui-fab>
```

#### Events

| Name    | Type                      | Description                                       |
| ------- | ------------------------- | ------------------------------------------------- |
| `click` | `function(event: object)` | Emits when the floating action button is clicked. |

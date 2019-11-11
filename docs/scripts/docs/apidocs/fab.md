```html
<ui-fab><!-- Icon --></ui-fab> <ui-fab extended><!-- Text label --></ui-fab>
```

#### Props

| Name       | Type           | Default | Description                                                                                      |
| ---------- | -------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `variant`  | string, number | `0`     | Mandatory. FAB variants.                                                                         |
| `extended` | boolean        | `false` | Optional. modifies the FAB to wider size which includes a text label.                            |
| `icon`     | string         | `''`    | Optional. for the icon element. See [Material Icons](/#/icons) usage.                            |
| `mini`     | boolean        | `false` | Optional. modifies the FAB to a smaller size.                                                    |
| `exited`   | boolean        | `false` | Optional. animates the FAB out of view. When this class is removed, the FAB will return to view. |
| `cssOnly`  | boolean        | `false` | Optional. for the element which hides the ripple.                                                |

> Variants: `0: 'regular'`, `1: 'extended'`

#### Slots

| Name      | Slots           | Description                                                           |
| --------- | --------------- | --------------------------------------------------------------------- |
| `default` | `{ iconClass }` | The default slot holds the floating action button icon or text label. |
| `before`  | `{ iconClass }` | The label slot holds the label text of the extended FAB.              |
| `after`   | `{ iconClass }` | The label slot holds the label text of the extended FAB.              |

> NOTE: the default slot of the extended FAB has not `slot-scope`.

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

```html
<ui-segmented-button></ui-segmented-button>
```

### Props

| Name       | Type    | Default | Description                                                 |
| ---------- | ------- | ------- | ----------------------------------------------------------- |
| `selected` | boolean | `false` | Styles a selected segmented button.                         |
| `text`     | string  | `''`    | Segmented button text.                                      |
| `icon`     | string  | `''`    | Segmented button icon. See [Material Icons](/#/icons) list. |

### Slots

| Name      | Props       | Description                                                            |
| --------- | ----------- | ---------------------------------------------------------------------- |
| `default` |             | The default slot holds the segmented button text and can contain HTML. |
| `before`  | `iconClass` | Custom leading icon                                                    |
| `after`   | `iconClass` | Custom trailing icon                                                   |

```html
<template #after="{ iconClass }">
  <ui-icon :class="iconClass">ICON</ui-icon>
</template>
```

### Events

| Name    | Type                      | Description                                 |
| ------- | ------------------------- | ------------------------------------------- |
| `click` | `function(event: object)` | Emits when the segmented button is clicked. |

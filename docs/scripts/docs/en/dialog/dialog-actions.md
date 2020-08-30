```html
<ui-dialog-actions><!-- the dialog actions --></ui-dialog-actions>
```

### Props

| Name         | Type   | Default    | Description             |
| ------------ | ------ | ---------- | ----------------------- |
| `acceptText` | string | `'OK'`     | The accept button text. |
| `cancelText` | string | `'Cancel'` | The cancel button text. |

### Slots

| Name      | Props         | Description                                                     |
| --------- | ------------- | --------------------------------------------------------------- |
| `default` | `buttonClass` | The default slot holds the dialog actions and can contain HTML. |

```html
<template #default="{ buttonClass }">
  <ui-button :class="buttonClass">BUTTON</ui-button>
</template>
```

**Other customizations**

- `data-mdc-dialog-button-default`: Optional. Add to a button to indicate that it is the default action button (see Default Action Button section above).
- `data-mdc-dialog-initial-focus`: Optional. Add to an element to indicate that it is the element to initially focus on after the dialog has opened.

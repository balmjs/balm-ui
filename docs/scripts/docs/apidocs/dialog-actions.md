```html
<ui-dialog-actions><!-- the dialog actions --></ui-dialog-actions>
```

#### Props

| Name         | Type   | Default    | Description             |
| ------------ | ------ | ---------- | ----------------------- |
| `acceptText` | string | `'OK'`     | The accept button text. |
| `cancelText` | string | `'Cancel'` | The cancel button text. |

#### Slots

| Name      | Slots             | Description                                                     |
| --------- | ----------------- | --------------------------------------------------------------- |
| `default` | `{ buttonClass }` | The default slot holds the dialog actions and can contain HTML. |

```html
<template #default="{ buttonClass }">
  <ui-button :class="buttonClass">BUTTON</ui-button>
</template>
```

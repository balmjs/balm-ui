```html
<ui-dialog-footer><!-- the dialog actions --></ui-dialog-footer>
```

#### Props

| Name       | Type     | Default    | Description             |
| ---------- | -------- | ---------- | ----------------------- |
| acceptText | `String` | `'Accept'` | The accept button text. |
| cancelText | `String` | `'Cancel'` | The cancel button text. |

#### Slots

| Name      | Description                                                     | `slot-scope`      |
| --------- | --------------------------------------------------------------- | ----------------- |
| (default) | The default slot holds the dialog actions and can contain HTML. | `{ buttonClass }` |

```html
<template slot-scope="{ buttonClass }">
  <ui-button :class="buttonClass">BUTTON</ui-button>
</template>
```

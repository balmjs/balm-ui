```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/dialog/dialog';
```

```js
import Vue from 'vue';
import UiDialogComponents from 'balm-ui/components/dialog';

Vue.use(UiDialogComponents, {
  // Optional. Overwrite `<ui-dialog>` props with default value.
  UiDialog: {
    // some props
  },
  // Optional. Overwrite `<ui-dialog-actions>` props with default value.
  UiDialogActions: {
    // some props
  }
});
```

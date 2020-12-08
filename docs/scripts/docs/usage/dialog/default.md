```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-dialog>` props with default value.
  UiDialog: {
    // some props
  },
  // Optional. Overwrite `<ui-dialog-title>` props with default value.
  UiDialogTitle: {
    // some props
  },
  // Optional. Overwrite `<ui-dialog-actions>` props with default value.
  UiDialogActions: {
    // some props
  }
});
```

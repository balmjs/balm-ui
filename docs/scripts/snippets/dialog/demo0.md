Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
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

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/dialog.css" />
<!-- endbuild -->
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

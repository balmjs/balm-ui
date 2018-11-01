Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-dialog>` props.
  UiDialog: {
    // some props
  },
  // Optional. Overwrite `<ui-dialog-actions>` props.
  UiDialogActions: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiDialogComponents from 'balm-ui/components/dialog';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/dialog.css';

Vue.use(UiDialogComponents, {
  // Optional. Overwrite `<ui-dialog>` props.
  UiDialog: {
    // some props
  },
  // Optional. Overwrite `<ui-dialog-actions>` props.
  UiDialogActions: {
    // some props
  }
});
```

<<<<<<< HEAD:docs/scripts/docs/usage/dialog.md
### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
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

### Individual Usage

=======
>>>>>>> origin/8.x:docs/scripts/docs/usage/dialog/individual.md
```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/dialog/dialog';
```

```js
import UiDialogComponents from 'balm-ui/components/dialog';

// `app`: Vue app
app.use(UiDialogComponents, {
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

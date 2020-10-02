### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-snackbar>` props with default value.
  UiSnackbar: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/snackbar/snackbar';
```

```js
import UiSnackbar from 'balm-ui/components/snackbar';

// `app`: Vue app
// Optional. Overwrite `<ui-snackbar>` props with default value.
app.use(UiSnackbar, {
  // some props
});
```

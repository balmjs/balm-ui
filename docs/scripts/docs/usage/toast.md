### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

// `app`: Vue app
app.use(BalmUIPlus, {
  // Optional. Overwrite `$toast` options.
  $toast: {
    // some options
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/snackbar/snackbar';
```

```js
import $toast from 'balm-ui/plugins/toast';

// `app`: Vue app
// Optional. Overwrite `$toast` options.
app.use($toast, {
  // some options
});
```

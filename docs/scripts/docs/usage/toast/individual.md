```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/snackbar/snackbar';
@use 'balm-ui/plugins/toast/toast'; // New in 9.20.0
```

```js
import $toast from 'balm-ui/plugins/toast';

// `app`: Vue app
// Optional. Overwrite `$toast` options.
app.use($toast, {
  // some options
});
```

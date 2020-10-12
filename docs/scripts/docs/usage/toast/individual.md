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

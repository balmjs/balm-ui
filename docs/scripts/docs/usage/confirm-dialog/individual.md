```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/dialog/dialog';
@use 'balm-ui/plugins/confirm/confirm';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import $confirm from 'balm-ui/plugins/confirm';

// `app`: Vue app
// Optional. Overwrite `$confirm` options.
app.use($confirm, {
  // some options
});
```

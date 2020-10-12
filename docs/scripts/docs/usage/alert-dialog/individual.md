```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/dialog/dialog';
@use 'balm-ui/plugins/alert/alert';
```

```js
import $alert from 'balm-ui/plugins/alert';

// `app`: Vue app
// Optional. Overwrite `$alert` options.
app.use($alert, {
  // some options
});
```

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/button/button';
@use 'balm-ui/components/file/file';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiFile from 'balm-ui/components/file';

// `app`: Vue app
// Optional. Overwrite `<ui-file>` props with default value.
app.use(UiFile, {
  // some props
});
```

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/chips/chips';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiChipsComponents from 'balm-ui/components/chips';

// `app`: Vue app
app.use(UiChipsComponents, {
  // Optional. Overwrite `<ui-chips>` props with default value.
  UiChips: {
    // some props
  }
});
```

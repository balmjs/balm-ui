### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-fab>` props with default value.
  UiFab: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/fab/fab';
@use 'balm-ui/components/icon/icon'; // Recommended
```

```js
import UiFab from 'balm-ui/components/fab';

// `app`: Vue app
// Optional. Overwrite `<ui-fab>` props with default value.
app.use(UiFab, {
  // some props
});
```

### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-spinner>` props with default value.
  UiSpinner: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/spinner/spinner';
```

```js
import UiSpinner from 'balm-ui/components/spinner';

// `app`: Vue app
// Optional. Overwrite `<ui-spinner>` props with default value.
app.use(UiSpinner, {
  // some props
});
```

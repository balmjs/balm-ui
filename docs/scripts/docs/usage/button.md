### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-button>` props with default value.
  UiButton: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/button/button';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiButton from 'balm-ui/components/button';

// `app`: Vue app
// Optional. Overwrite `<ui-button>` props with default value.
app.use(UiButton, {
  // some props
});
```

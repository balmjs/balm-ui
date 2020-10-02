### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-icon>` props with default value.
  UiIcon: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/icon/icon';
```

```js
import UiIcon from 'balm-ui/components/icon';

// `app`: Vue app
// Optional. Overwrite `<ui-icon>` props with default value.
app.use(UiIcon, {
  // some props
});
```

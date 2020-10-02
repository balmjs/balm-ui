### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-banner>` props with default value.
  UiBanner: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/banner/banner';
```

```js
import UiBanner from 'balm-ui/components/banner';

// `app`: Vue app
// Optional. Overwrite `<ui-banner>` props with default value.
app.use(UiBanner, {
  // some props
});
```

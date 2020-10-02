### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-top-app-bar>` props with default value.
  UiTopAppBar: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/icon-button/icon-button';
@use 'balm-ui/components/top-app-bar/top-app-bar';
```

```js
import UiTopAppBar from 'balm-ui/components/top-app-bar';

// `app`: Vue app
// Optional. Overwrite `<ui-top-app-bar>` props with default value.
app.use(UiTopAppBar, {
  // some props
});
```

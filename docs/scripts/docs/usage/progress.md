### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-progress>` props with default value.
  UiProgress: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/progress/progress';
```

```js
import UiProgress from 'balm-ui/components/progress';

// `app`: Vue app
// Optional. Overwrite `<ui-progress>` props with default value.
app.use(UiProgress, {
  // some props
});
```

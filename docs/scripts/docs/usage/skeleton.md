### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

// `app`: Vue app
app.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-skeleton>` props with default value.
  UiSkeleton: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/skeleton/skeleton';
```

```js
import UiSkeleton from 'balm-ui/components/skeleton';

// `app`: Vue app
// Optional. Overwrite `<ui-skeleton>` props with default value.
app.use(UiSkeleton, {
  // some props
});
```

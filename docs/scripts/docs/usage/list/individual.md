```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/list/list';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiListComponents from 'balm-ui/components/list';

// `app`: Vue app
app.use(UiListComponents, {
  // Optional. Overwrite `<ui-list>` props with default value.
  UiList: {
    // some props
  }
});
```

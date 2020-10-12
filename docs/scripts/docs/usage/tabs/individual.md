```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/tabs/tabs';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiTabsComponents from 'balm-ui/components/tabs';

// `app`: Vue app
app.use(UiTabsComponents, {
  // Optional. Overwrite `<ui-tabs>` props with default value.
  UiTabs: {
    // some props
  }
});
```

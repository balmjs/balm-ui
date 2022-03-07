```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/navigation-bar/navigation-bar';
@use 'balm-ui/components/tabs/tabs';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiNavigationBar from 'balm-ui/components/navigation-bar';
import UiTabsComponents from 'balm-ui/components/tabs';

// `app`: Vue app
// Optional. Overwrite `<ui-navigation-bar>` props with default value.
app.use(UiNavigationBar, {
  // some props
});
app.use(UiTabsComponents);
```

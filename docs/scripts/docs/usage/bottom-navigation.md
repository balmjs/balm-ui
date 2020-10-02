### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUINext from 'balm-ui/dist/balm-ui-next';

// `app`: Vue app
app.use(BalmUINext, {
  // Optional. Overwrite `<ui-bottom-navigation>` props with default value.
  UiBottomNavigation: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/tabs/tabs';
@use 'balm-ui/components/bottom-navigation/bottom-navigation';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiBottomNavigation from 'balm-ui/components/bottom-navigation';

// `app`: Vue app
// Optional. Overwrite `<ui-bottom-navigation>` props with default value.
app.use(UiBottomNavigation, {
  // some props
});
```

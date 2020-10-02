### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-menu>` props with default value.
  UiMenu: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/list/list';
@use 'balm-ui/components/menu/menu';
```

```js
import UiMenuComponents from 'balm-ui/components/menu';

// `app`: Vue app
app.use(UiMenuComponents, {
  // Optional. Overwrite `<ui-menu>` props with default value.
  UiMenu: {
    // some props
  }
});
```

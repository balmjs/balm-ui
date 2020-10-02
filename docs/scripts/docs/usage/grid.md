### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-grid>` props with default value.
  UiGrid: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/grid/grid';
```

```js
import UiGridComponents from 'balm-ui/components/grid';
import $grid from 'balm-ui/plugins/grid'; // Optional

// `app`: Vue app
app.use(UiGridComponents, {
  // Optional. Overwrite `<ui-grid>` props with default value.
  UiGrid: {
    // some props
  }
});
app.use($grid); // Optional
```

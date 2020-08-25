### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-table>` props with default value.
  UiTable: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/table/table';
@use 'balm-ui/components/checkbox/checkbox';
@use 'balm-ui/components/icon-button/icon-button';
@use 'balm-ui/components/icon/icon';
```

```js
import Vue from 'vue';
import UiTable from 'balm-ui/components/table';

// Optional. Overwrite `<ui-table>` props with default value.
Vue.use(UiTable, {
  // some props
});
```

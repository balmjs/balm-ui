### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-select>` props with default value.
  UiSelect: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/list/list';
@use 'balm-ui/components/menu/menu';
@use 'balm-ui/components/form-field/form-item';
@use 'balm-ui/components/select/select';
@use 'balm-ui/components/icon/icon';
```

```js
import Vue from 'vue';
import UiSelect from 'balm-ui/components/select';

// Optional. Overwrite `<ui-select>` props with default value.
Vue.use(UiSelect, {
  // some props
});
```

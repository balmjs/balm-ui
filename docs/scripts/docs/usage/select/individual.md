```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/select/select';
@use 'balm-ui/components/menu/menu';
@use 'balm-ui/components/list/list';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import Vue from 'vue';
import UiSelect from 'balm-ui/components/select';

// Optional. Overwrite `<ui-select>` props with default value.
Vue.use(UiSelect, {
  // some props
});
```

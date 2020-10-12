```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/checkbox/checkbox';
@use 'balm-ui/components/form-field/form-field';
```

```js
import Vue from 'vue';
import UiFormField from 'balm-ui/components/form-field';
import UiCheckbox from 'balm-ui/components/checkbox';

Vue.use(UiFormField);
// Optional. Overwrite `<ui-checkbox>` props with default value.
Vue.use(UiCheckbox, {
  // some props
});
```

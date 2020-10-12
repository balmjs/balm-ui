```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/form-field/form-item';
@use 'balm-ui/components/textfield/textfield';
@use 'balm-ui/components/picker/picker';
@use 'balm-ui/components/datepicker/datepicker';
```

```js
import Vue from 'vue';
import UiDatepicker from 'balm-ui/components/datepicker';

// Optional. Overwrite `<ui-datepicker>` props with default value.
Vue.use(UiDatepicker, {
  // some props
});
```

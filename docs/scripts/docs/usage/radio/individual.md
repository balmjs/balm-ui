```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/form-field/form-field';
@use 'balm-ui/components/radio/radio';
```

```js
import Vue from 'vue';
import UiFormField from 'balm-ui/components/form-field';
import UiRadio from 'balm-ui/components/radio';

Vue.use(UiFormField);
// Optional. Overwrite `<ui-radio>` props with default value.
Vue.use(UiRadio, {
  // some props
});
```

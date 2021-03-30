```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/textfield/textfield';
@use 'balm-ui/components/autocomplete/autocomplete';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import Vue from 'vue';
import UiAutocomplete from 'balm-ui/components/autocomplete';

// Optional. Overwrite `<ui-autocomplete>` props with default value.
Vue.use(UiAutocomplete, {
  // some props
});
```

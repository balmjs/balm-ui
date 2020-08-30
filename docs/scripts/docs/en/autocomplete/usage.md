### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-autocomplete>` props with default value.
  UiAutocomplete: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/form-field/form-item';
@use 'balm-ui/components/textfield/textfield';
@use 'balm-ui/components/autocomplete/autocomplete';
```

```js
import Vue from 'vue';
import UiAutocomplete from 'balm-ui/components/autocomplete';

// Optional. Overwrite `<ui-autocomplete>` props with default value.
Vue.use(UiAutocomplete, {
  // some props
});
```

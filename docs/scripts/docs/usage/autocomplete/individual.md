```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/textfield/textfield';
@use 'balm-ui/components/autocomplete/autocomplete';
@use 'balm-ui/components/menu/menu';
@use 'balm-ui/components/list/list';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiAutocomplete from 'balm-ui/components/autocomplete';

// `app`: Vue app
// Optional. Overwrite `<ui-autocomplete>` props with default value.
app.use(UiAutocomplete, {
  // some props
});
```

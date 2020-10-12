```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/form-field/form-item';
@use 'balm-ui/components/textfield/textfield';
@use 'balm-ui/components/autocomplete/autocomplete';
```

```js
import UiAutocomplete from 'balm-ui/components/autocomplete';

// `app`: Vue app
// Optional. Overwrite `<ui-autocomplete>` props with default value.
app.use(UiAutocomplete, {
  // some props
});
```

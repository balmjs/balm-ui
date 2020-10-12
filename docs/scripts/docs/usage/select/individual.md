```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/list/list';
@use 'balm-ui/components/menu/menu';
@use 'balm-ui/components/form-field/form-item';
@use 'balm-ui/components/select/select';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiSelect from 'balm-ui/components/select';

// `app`: Vue app
// Optional. Overwrite `<ui-select>` props with default value.
app.use(UiSelect, {
  // some props
});
```

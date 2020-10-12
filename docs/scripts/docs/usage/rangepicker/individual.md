```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/form-field/form-item';
@use 'balm-ui/components/textfield/textfield';
@use 'balm-ui/components/picker/picker';
@use 'balm-ui/components/datepicker/datepicker';
@use 'balm-ui/components/rangepicker/rangepicker';
```

```js
import UiRangepicker from 'balm-ui/components/rangepicker';

// `app`: Vue app
// Optional. Overwrite `<ui-rangepicker>` props with default value.
app.use(UiRangepicker, {
  // some props
});
```

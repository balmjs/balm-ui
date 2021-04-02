```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/form-field/form-field';
@use 'balm-ui/components/radio/radio';
```

```js
import UiFormField from 'balm-ui/components/form-field';
import UiRadio from 'balm-ui/components/radio';

// `app`: Vue app
app.use(UiFormField);
// Optional. Overwrite `<ui-radio>` props with default value.
app.use(UiRadio, {
  // some props
});
```

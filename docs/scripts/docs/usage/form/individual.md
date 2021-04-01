```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/form-field/form-field'; // NOTE: It must be loaded before form styles
@use 'balm-ui/components/form/form';
```

```js
import UiForm from 'balm-ui/components/form';
import UiFormField from 'balm-ui/components/form-field';

// `app`: Vue app
app.use(UiForm);
app.use(UiFormField);
```

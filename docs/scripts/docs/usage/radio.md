### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-radio>` props with default value.
  UiRadio: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/radio/radio';
@use 'balm-ui/components/form-field/form-field';
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

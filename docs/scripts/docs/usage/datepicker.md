### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

// `app`: Vue app
app.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-datepicker>` props with default value.
  UiDatepicker: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/form-field/form-item';
@use 'balm-ui/components/textfield/textfield';
@use 'balm-ui/components/picker/picker';
@use 'balm-ui/components/datepicker/datepicker';
```

```js
import UiDatepicker from 'balm-ui/components/datepicker';

// `app`: Vue app
// Optional. Overwrite `<ui-datepicker>` props with default value.
app.use(UiDatepicker, {
  // some props
});
```

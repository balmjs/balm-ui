<<<<<<< HEAD:docs/scripts/docs/usage/autocomplete.md
### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

// `app`: Vue app
app.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-autocomplete>` props with default value.
  UiAutocomplete: {
    // some props
  }
});
```

### Individual Usage

=======
>>>>>>> origin/8.x:docs/scripts/docs/usage/autocomplete/individual.md
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

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

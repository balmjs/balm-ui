### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-autocomplete>` props with default value.
  UiAutocomplete: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/form-field/form-item.scss';
@use 'balm-ui/components/textfield/textfield.scss';
@use 'balm-ui/components/autocomplete/autocomplete.scss';
```

```js
import Vue from 'vue';
import UiAutocomplete from 'balm-ui/components/autocomplete';

// Optional. Overwrite `<ui-autocomplete>` props with default value.
Vue.use(UiAutocomplete, {
  // some props
});
```

Default Usage

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

Standalone Usage

```js
import Vue from 'vue';
import UiAutocomplete from 'balm-ui/components/autocomplete';

// Optional. Overwrite `<ui-autocomplete>` props with default value.
Vue.use(UiAutocomplete, {
  // some props
});
```

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/textfield/textfield.scss';
  @use 'balm-ui/components/autocomplete/autocomplete.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/textfield/textfield.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/autocomplete/autocomplete.css" />
  <!-- endbuild -->
  ```

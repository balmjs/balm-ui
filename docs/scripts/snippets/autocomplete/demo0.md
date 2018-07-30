Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-autocomplete>` props.
  UiAutocomplete: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiAutocomplete from 'balm-ui/components/autocomplete';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/textfield.css';
import 'balm-ui/components/autocomplete.css';

// Optional. Overwrite `<ui-autocomplete>` props.
Vue.use(UiAutocomplete, {
  // some props
});
```

Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // (Optional) Overwrite <ui-checkbox> props
  UiCheckbox: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiCheckbox from 'balm-ui/components/checkbox';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage
import 'balm-ui/components/core.css';
import 'balm-ui/components/checkbox.css';

// (Optional) Overwrite <ui-checkbox> props
UiCheckbox.config({
  // some props
});

Vue.component(UiCheckbox.name, UiCheckbox);
```

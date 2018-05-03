Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // (Optional) Overwrite <ui-icon-toggle> props
  UiIconToggle: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiIconToggle from 'balm-ui/components/icon-toggle';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage
import 'balm-ui/components/core.css';
import 'balm-ui/components/icon-toggle.css';
import 'balm-ui/components/icon.css'; // Optional

// (Optional) Overwrite <ui-icon-toggle> props
UiIconToggle.config({
  // some props
});

Vue.component(UiIconToggle.name, UiIconToggle);
```

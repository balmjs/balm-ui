Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-icon>` props.
  UiIcon: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiIcon from 'balm-ui/components/icon';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/icon.css';

// Optional. Overwrite `<ui-icon>` props.
Vue.use(UiIcon, {
  // some props
});
```

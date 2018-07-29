Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-dropdown>` props.
  UiDropdown: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiDropdown from 'balm-ui/components/dropdown';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/menu.css';
import 'balm-ui/components/dropdown.css';

// Optional. Overwrite `<ui-dropdown>` props.
Vue.use(UiDropdown, {
  // some props
});
```

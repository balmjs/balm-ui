Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-table>` props.
  UiTable: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiTableComponent from 'balm-ui/components/table';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/table.css';
import 'balm-ui/components/checkbox.css'; // Optional.
import 'balm-ui/components/icon.css'; // Optional.

Vue.use(UiTableComponent, {
  // Optional. Overwrite `<ui-table>` props.
  UiTable: {
    // some props
  }
});
```

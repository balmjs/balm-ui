Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-chip-set>` props.
  UiChipSet: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiChipsComponents from 'balm-ui/components/chips';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/chips.css';
import 'balm-ui/components/icon.css'; // Optional.

Vue.use(UiChipsComponents, {
  // Optional. Overwrite `<ui-chip-set>` props.
  UiChipSet: {
    // some props
  }
});
```

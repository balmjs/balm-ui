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

// Optional.
UiChipsComponents.config({
  // Overwrite `<ui-chip-set>` props.
  UiChipSet: {
    // some props
  }
});

for (let key in UiChipsComponents) {
  let Component = UiChipsComponents[key];
  Vue.component(Component.name, Component);
}
```

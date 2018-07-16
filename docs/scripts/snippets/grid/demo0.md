Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-grid>` props.
  UiGrid: {
    // some props
  },
  // Optional. Overwrite `<ui-grid-cell>` props.
  UiGridCell: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiGridComponents from 'balm-ui/components/grid';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/grid.css';

// Optional.
UiGridComponents.config({
  // Overwrite `<ui-grid>` props.
  UiGrid: {
    // some props
  },
  // Overwrite `<ui-grid-cell>` props.
  UiGridCell: {
    // some props
  }
});

for (let key in UiGridComponents) {
  let Component = UiGridComponents[key];
  Vue.component(Component.name, Component);
}
```

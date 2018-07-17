Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-icon-button>` props.
  UiIconButton: {
    // some props
  },
  // Optional. Overwrite `<ui-icon-link>` props.
  UiIconLink: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiIconButtonComponents from 'balm-ui/components/icon-button';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/icon-button.css';
import 'balm-ui/components/icon.css';

// Optional.
UiIconButtonComponents.config({
  // Overwrite `<ui-icon-button>` props.
  UiIconButton: {
    // some props
  },
  // Overwrite `<ui-icon-link>` props.
  UiIconLink: {
    // some props
  }
});

for (let key in UiIconButtonComponents) {
  let Component = UiIconButtonComponents[key];
  Vue.component(Component.name, Component);
}
```

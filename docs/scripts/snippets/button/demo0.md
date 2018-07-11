Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // (Optional) Overwrite <ui-button> props
  UiButton: {
    // some props
  },
  // (Optional) Overwrite <ui-link> props
  UiLink: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiButtonComponents from 'balm-ui/components/button';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage
import 'balm-ui/components/core.css';
import 'balm-ui/components/button.css';
import 'balm-ui/components/icon.css'; // Optional

// (Optional)
UiButtonComponents.config({
  // Overwrite <ui-button> props
  UiButton: {
    // some props
  },
  // Overwrite <ui-link> props
  UiLink: {
    // some props
  }
});

for (let key in UiButtonComponents) {
  let Component = UiButtonComponents[key];
  Vue.component(Component.name, Component);
}
```

Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-icon-button>` and `<ui-icon-a>` props.
  UiIconButton: {
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
import 'balm-ui/components/icon.css';
import 'balm-ui/components/icon-button.css';

Vue.use(UiIconButtonComponents, {
  // Optional. Overwrite `<ui-icon-button>` and `<ui-icon-a>` props.
  UiIconButton: {
    // some props
  }
});
```

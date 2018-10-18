Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-button>` and `<ui-a>` props.
  UiButton: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiButtonComponents from 'balm-ui/components/button';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/button.css';
import 'balm-ui/components/icon.css'; // Optional.

Vue.use(UiButtonComponents, {
  // Optional. Overwrite `<ui-button>` and `<ui-a>` props.
  UiButton: {
    // some props
  }
});
```

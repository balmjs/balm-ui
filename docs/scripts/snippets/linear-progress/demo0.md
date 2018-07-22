Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-linear-progress>` props.
  UiLinearProgress: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiLinearProgress from 'balm-ui/components/linear-progress';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/linear-progress.css';

// Optional. Overwrite `<ui-linear-progress>` props.
Vue.use(UiLinearProgress, {
  // some props
});
```

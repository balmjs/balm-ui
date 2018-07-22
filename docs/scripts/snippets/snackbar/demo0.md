Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-snackbar>` props.
  UiSnackbar: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiSnackbar from 'balm-ui/components/snackbar';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/snackbar.css';

// Optional. Overwrite `<ui-snackbar>` props.
Vue.use(UiSnackbar, {
  // some props
});
```

Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `$toast` options.
  toast: {
    // some options
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import toast from 'balm-ui/plugins/toast';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/snackbar.css';

// Optional. Overwrite `$toast` options.
Vue.use(toast, {
  // some options
});
```

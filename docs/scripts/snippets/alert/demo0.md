Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `$alert` options.
  alert: {
    // some options
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import alert from 'balm-ui/plugins/alert';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/button.css';
import 'balm-ui/components/dialog.css';
import 'balm-ui/plugins/alert.css';

// Optional. Overwrite `$alert` options.
Vue.use(alert, {
  // some options
});
```

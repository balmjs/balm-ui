Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `$confirm` options.
  confirm: {
    // some options
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import confirm from 'balm-ui/plugins/confirm';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/button.css';
import 'balm-ui/components/dialog.css';
import 'balm-ui/plugins/confirm.css';

// Optional. Overwrite `$confirm` options.
Vue.use(confirm, {
  // some options
});
```

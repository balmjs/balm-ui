Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite the param of `$tt()`.
  typography: ['custom-module-1', 'custom-module-2']
});
```

Standalone Usage

```js
import Vue from 'vue';
import typography from 'balm-ui/plugins/typography';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css'; // (Include 'plugins/typography.css')
// OR
import 'balm-ui/plugins/typography.css';
import '/path/to/custom-typography.css'; // Optional.

// Optional. Overwrite the param of `$tt()`.
Vue.use(typography, ['custom-module-1', 'custom-module-2']);
```

Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

Standalone Usage

```js
import Vue from 'vue';
import ripple from 'balm-ui/directives/ripple';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css'; // (Include 'directives/ripple.css')
// OR
import 'balm-ui/directives/ripple.css';

Vue.use(ripple);
```

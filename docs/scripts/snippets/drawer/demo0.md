Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

Standalone Usage

```js
import Vue from 'vue';
import UiDrawerComponents from 'balm-ui/components/drawer';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/drawer.css';
import 'balm-ui/components/list.css';

Vue.use(UiDrawerComponents);
```

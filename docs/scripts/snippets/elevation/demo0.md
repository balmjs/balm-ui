Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

Standalone Usage

```js
import Vue from 'vue';
import elevation from 'balm-ui/plugins/elevation';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/elevation.css';

Vue.use(elevation);
```

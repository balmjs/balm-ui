Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

Standalone Usage

```js
import Vue from 'vue';
import shape from 'balm-ui/directives/shape';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/directives/shape.css';

Vue.use(shape);
```

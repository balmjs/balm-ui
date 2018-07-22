Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

Standalone Usage

```js
import Vue from 'vue';
import elevation from 'balm-ui/directives/elevation';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css'; // (Include 'directives/elevation.css')
// OR
import 'balm-ui/directives/elevation.css';

Vue.directive(elevation.name, elevation);
```

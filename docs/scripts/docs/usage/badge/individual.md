```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/badge/badge';
@use 'balm-ui/components/icon/icon'; // Recommended
```

```js
import Vue from 'vue';
import UiBadge from 'balm-ui/components/badge';
import vBadge from 'balm-ui/directives/badge'; // Optional

Vue.use(UiBadge);
Vue.directive(vBadge.name, vBadge); // Optional
```

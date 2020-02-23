Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/directives/elevation.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import elevation from 'balm-ui/directives/elevation';

Vue.directive(elevation.name, elevation);
```

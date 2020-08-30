### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

### Individual Usage

```scss
@use 'balm-ui/directives/shape/shape';
```

```js
import Vue from 'vue';
import vShape from 'balm-ui/directives/shape';

Vue.directive(vShape.name, vShape);
```

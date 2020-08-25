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
import shape from 'balm-ui/directives/shape';

Vue.directive(shape.name, shape);
```

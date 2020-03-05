### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

### Individual Usage

```css
@use 'balm-ui/directives/shape/shape.scss';
```

```js
import Vue from 'vue';
import shape from 'balm-ui/directives/shape';

Vue.directive(shape.name, shape);
```

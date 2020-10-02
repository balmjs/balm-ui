### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI);
```

### Individual Usage

```scss
@use 'balm-ui/directives/shape/shape';
```

```js
import vShape from 'balm-ui/directives/shape';

// `app`: Vue app
app.directive(vShape.name, vShape);
```

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
/* Included `elevation.scss` */
@use 'balm-ui/components/core';

/* OR */
@use 'balm-ui/directives/elevation/elevation';
```

```js
import vElevation from 'balm-ui/directives/elevation';

// `app`: Vue app
app.directive(vElevation.name, vElevation);
```

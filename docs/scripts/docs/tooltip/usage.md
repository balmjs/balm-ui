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
@use 'balm-ui/components/core';
@use 'balm-ui/components/tooltip/tooltip';
```

```js
import Vue from 'vue';
import tooltip from 'balm-ui/directives/tooltip';
import UiTooltip from 'balm-ui/components/tooltip'; // Optional. For custom

Vue.directive(tooltip.name, tooltip);
// Optional. For custom
Vue.use(UiTooltip);
```

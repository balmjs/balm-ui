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
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/tooltip/tooltip.scss';
```

```js
import Vue from 'vue';
import tooltip from 'balm-ui/directives/tooltip';
import UiTooltip from 'balm-ui/components/tooltip'; // Optional. For custom

Vue.directive(tooltip.name, tooltip);
// Optional. For custom
Vue.use(UiTooltip);
```

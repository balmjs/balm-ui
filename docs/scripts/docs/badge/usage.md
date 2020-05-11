### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUI);
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/badge/badge.scss';
@use 'balm-ui/components/icon/icon.scss';
```

```js
import Vue from 'vue';
import UiBadge from 'balm-ui/components/badge';
import vBadge from 'balm-ui/directives/badge'; // Optional

Vue.use(UiBadge);
Vue.directive(vBadge.name, vBadge); // Optional
```

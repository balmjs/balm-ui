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
@use 'balm-ui/components/drawer/drawer.scss';
@use 'balm-ui/components/list/list.scss';
```

```js
import Vue from 'vue';
import UiDrawerComponents from 'balm-ui/components/drawer';

Vue.use(UiDrawerComponents);
```

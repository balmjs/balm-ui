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
@use 'balm-ui/components/alert/alert.scss';
@use 'balm-ui/components/icon/icon.scss';
```

```js
import Vue from 'vue';
import UiAlert from 'balm-ui/components/alert';

Vue.use(UiAlert);
```

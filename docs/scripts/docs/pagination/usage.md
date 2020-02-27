### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-pagination>` props with default value.
  UiPagination: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/pagination/pagination.scss';
```

```js
import Vue from 'vue';
import UiPagination from 'balm-ui/components/pagination';

// Optional. Overwrite `<ui-pagination>` props with default value.
Vue.use(UiPagination, {
  // some props
});
```

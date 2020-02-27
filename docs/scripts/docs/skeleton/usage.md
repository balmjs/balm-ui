### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-skeleton>` props with default value.
  UiSkeleton: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/skeleton/skeleton.scss';
```

```js
import Vue from 'vue';
import UiSkeleton from 'balm-ui/components/skeleton';

// Optional. Overwrite `<ui-skeleton>` props with default value.
Vue.use(UiSkeleton, {
  // some props
});
```

Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-skeleton>` props.
  UiSkeleton: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiSkeleton from 'balm-ui/components/skeleton';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/skeleton.css';

// Optional. Overwrite `<ui-skeleton>` props.
Vue.use(UiSkeleton, {
  // some props
});
```

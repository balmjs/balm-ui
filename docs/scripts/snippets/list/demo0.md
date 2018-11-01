Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-list>` and `<ui-list-nav>` props.
  UiList: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiListComponents from 'balm-ui/components/list';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/list.css';
import 'balm-ui/components/icon.css'; // Optional.

Vue.use(UiListComponents, {
  // Optional. Overwrite `<ui-list>` and `<ui-list-nav>` props.
  UiList: {
    // some props
  }
});
```

Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-top-app-bar>` props.
  UiTopAppBar: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiTopAppBar from 'balm-ui/components/top-app-bar';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/top-app-bar.css';

// Optional. Overwrite `<ui-top-app-bar>` props.
UiTopAppBar.config({
  // some props
});

Vue.component(UiTopAppBar.name, UiTopAppBar);
```

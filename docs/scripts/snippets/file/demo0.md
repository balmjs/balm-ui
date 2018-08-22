Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-file>` props.
  UiFile: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiFile from 'balm-ui/components/file';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/button.css';
import 'balm-ui/components/file.css';

// Optional. Overwrite `<ui-file>` props.
Vue.use(UiFile, {
  // some props
});
```

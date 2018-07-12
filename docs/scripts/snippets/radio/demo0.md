Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // (Optional) Overwrite <ui-radio> props
  UiRadio: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiRadio from 'balm-ui/components/radio';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage
import 'balm-ui/components/core.css';
import 'balm-ui/components/radio.css';

// (Optional) Overwrite <ui-radio> props
UiRadio.config({
  // some props
});

Vue.component(UiRadio.name, UiRadio);
```

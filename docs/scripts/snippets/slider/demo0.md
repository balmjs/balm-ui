Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // (Optional) Overwrite <ui-slider> props
  UiSlider: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiSlider from 'balm-ui/components/slider';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage
import 'balm-ui/components/core.css';
import 'balm-ui/components/slider.css';

// (Optional) Overwrite <ui-slider> props
UiSlider.config({
  // some props
});

Vue.component(UiSlider.name, UiSlider);
```

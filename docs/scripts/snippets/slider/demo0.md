Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-slider>` props with default value.
  UiSlider: {
    // some props
  }
});
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/slider.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import UiSlider from 'balm-ui/components/slider';

// Optional. Overwrite `<ui-slider>` props with default value.
Vue.use(UiSlider, {
  // some props
});
```

### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

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

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/slider/slider';
```

```js
import Vue from 'vue';
import UiSlider from 'balm-ui/components/slider';

// Optional. Overwrite `<ui-slider>` props with default value.
Vue.use(UiSlider, {
  // some props
});
```

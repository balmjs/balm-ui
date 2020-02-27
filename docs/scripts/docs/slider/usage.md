### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
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

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/slider/slider.scss';
```

```js
import Vue from 'vue';
import UiSlider from 'balm-ui/components/slider';

// Optional. Overwrite `<ui-slider>` props with default value.
Vue.use(UiSlider, {
  // some props
});
```

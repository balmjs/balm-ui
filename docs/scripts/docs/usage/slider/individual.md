<<<<<<< HEAD:docs/scripts/docs/usage/slider.md
### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-slider>` props with default value.
  UiSlider: {
    // some props
  }
});
```

### Individual Usage

=======
>>>>>>> origin/8.x:docs/scripts/docs/usage/slider/individual.md
```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/slider/slider';
```

```js
import UiSlider from 'balm-ui/components/slider';

// `app`: Vue app
// Optional. Overwrite `<ui-slider>` props with default value.
app.use(UiSlider, {
  // some props
});
```

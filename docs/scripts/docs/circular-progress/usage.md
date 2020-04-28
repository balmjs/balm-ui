### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-circular-progress>` props with default value.
  UiCircularProgress: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/circular-progress/circular-progress.scss';
```

```js
import Vue from 'vue';
import UiCircularProgress from 'balm-ui/components/circular-progress';

// Optional. Overwrite `<ui-circular-progress>` props with default value.
Vue.use(UiCircularProgress, {
  // some props
});
```

### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-linear-progress>` props with default value.
  UiLinearProgress: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/linear-progress/linear-progress.scss';
```

```js
import Vue from 'vue';
import UiLinearProgress from 'balm-ui/components/linear-progress';

// Optional. Overwrite `<ui-linear-progress>` props with default value.
Vue.use(UiLinearProgress, {
  // some props
});
```

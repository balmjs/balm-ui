### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-progress>` props with default value.
  UiProgress: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/progress/progress.scss';
```

```js
import Vue from 'vue';
import UiProgress from 'balm-ui/components/progress';

// Optional. Overwrite `<ui-progress>` props with default value.
Vue.use(UiProgress, {
  // some props
});
```

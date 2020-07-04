### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-spinner>` props with default value.
  UiSpinner: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/spinner/spinner.scss';
```

```js
import Vue from 'vue';
import UiSpinner from 'balm-ui/components/spinner';

// Optional. Overwrite `<ui-spinner>` props with default value.
Vue.use(UiSpinner, {
  // some props
});
```

### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-button>` props with default value.
  UiButton: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/button/button.scss';
@use 'balm-ui/components/icon/icon.scss';
```

```js
import Vue from 'vue';
import UiButton from 'balm-ui/components/button';

// Optional. Overwrite `<ui-button>` props with default value.
Vue.use(UiButton, {
  // some props
});
```

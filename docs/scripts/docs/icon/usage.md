### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-icon>` props with default value.
  UiIcon: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/icon/icon.scss';
```

```js
import Vue from 'vue';
import UiIcon from 'balm-ui/components/icon';

// Optional. Overwrite `<ui-icon>` props with default value.
Vue.use(UiIcon, {
  // some props
});
```

### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-icon-button>` props with default value.
  UiIconButton: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/icon-button/icon-button.scss';
@use 'balm-ui/components/icon/icon.scss';
```

```js
import Vue from 'vue';
import UiIconButton from 'balm-ui/components/icon-button';

// Optional. Overwrite `<ui-icon-button>` props with default value.
Vue.use(UiIconButton, {
  // some props
});
```

### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-button>` and `<ui-a>` props with default value.
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
import UiButtonComponents from 'balm-ui/components/button';

Vue.use(UiButtonComponents, {
  // Optional. Overwrite `<ui-button>` and `<ui-a>` props with default value.
  UiButton: {
    // some props
  }
});
```

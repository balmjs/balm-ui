### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-icon-button>` and `<ui-icon-a>` props with default value.
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
import UiIconButtonComponents from 'balm-ui/components/icon-button';

Vue.use(UiIconButtonComponents, {
  // Optional. Overwrite `<ui-icon-button>` and `<ui-icon-a>` props with default value.
  UiIconButton: {
    // some props
  }
});
```

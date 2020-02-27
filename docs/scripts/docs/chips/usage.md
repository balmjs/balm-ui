### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-chips>` props with default value.
  UiChips: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/chips/chips.scss';
@use 'balm-ui/components/icon/icon.scss';
```

```js
import Vue from 'vue';
import UiChipsComponents from 'balm-ui/components/chips';

Vue.use(UiChipsComponents, {
  // Optional. Overwrite `<ui-chips>` props with default value.
  UiChips: {
    // some props
  }
});
```

### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-list>` props with default value.
  UiList: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/list/list.scss';
@use 'balm-ui/components/icon/icon.scss';
```

```js
import Vue from 'vue';
import UiListComponents from 'balm-ui/components/list';

Vue.use(UiListComponents, {
  // Optional. Overwrite `<ui-list>` props with default value.
  UiList: {
    // some props
  }
});
```

### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-select>` props with default value.
  UiSelect: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/list/list.scss';
@use 'balm-ui/components/menu/menu.scss';
@use 'balm-ui/components/form-field/form-item.scss';
@use 'balm-ui/components/select/select.scss';
@use 'balm-ui/components/icon/icon.scss';
```

```js
import Vue from 'vue';
import UiSelect from 'balm-ui/components/select';

// Optional. Overwrite `<ui-select>` props with default value.
Vue.use(UiSelect, {
  // some props
});
```

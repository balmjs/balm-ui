### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-table>` props with default value.
  UiTable: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/table/table.scss';
@use 'balm-ui/components/checkbox/checkbox.scss';
@use 'balm-ui/components/icon-button/icon-button.scss';
@use 'balm-ui/components/icon/icon.scss';
```

```js
import Vue from 'vue';
import UiTableComponent from 'balm-ui/components/table';

Vue.use(UiTableComponent, {
  // Optional. Overwrite `<ui-table>` props with default value.
  UiTable: {
    // some props
  }
});
```

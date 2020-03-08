### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-rangepicker>` props with default value.
  UiRangepicker: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/form-field/form-item.scss';
@use 'balm-ui/components/textfield/textfield.scss';
@use 'balm-ui/components/picker/picker.scss';
@use 'balm-ui/components/datepicker/datepicker.scss';
@use 'balm-ui/components/rangepicker/rangepicker.scss';
```

```js
import Vue from 'vue';
import UiRangepicker from 'balm-ui/components/rangepicker';

// Optional. Overwrite `<ui-rangepicker>` props with default value.
Vue.use(UiRangepicker, {
  // some props
});
```

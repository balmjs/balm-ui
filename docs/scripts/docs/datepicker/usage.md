### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
@use 'flatpickr/dist/flatpickr.min.css';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-datepicker>` props with default value.
  UiDatepicker: {
    // some props
  }
});
```

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/form-field/form-item.scss';
@use 'balm-ui/components/textfield/textfield.scss';
@use 'balm-ui/components/datepicker/datepicker.scss';
@use 'flatpickr/dist/flatpickr.min.css';
```

```js
import Vue from 'vue';
import UiDatepicker from 'balm-ui/components/datepicker';

// Optional. Overwrite `<ui-datepicker>` props with default value.
Vue.use(UiDatepicker, {
  // some props
});
```

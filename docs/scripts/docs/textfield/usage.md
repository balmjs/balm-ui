### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-textfield>` props with default value.
  UiTextfield: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/form-field/form-item';
@use 'balm-ui/components/textfield/textfield';
@use 'balm-ui/components/icon/icon';
```

```js
import Vue from 'vue';
import UiTextfieldComponents from 'balm-ui/components/textfield';

Vue.use(UiTextfieldComponents, {
  // Optional. Overwrite `<ui-textfield>` props with default value.
  UiTextfield: {
    // some props
  }
});
```

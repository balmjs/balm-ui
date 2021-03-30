```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/textfield/textfield';
@use 'balm-ui/components/icon/icon'; // Optional
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

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/textfield/textfield';
@use 'balm-ui/components/picker/picker';
@use 'balm-ui/components/timepicker/timepicker';
@use 'balm-ui/components/timerangepicker/timerangepicker';
```

```js
import Vue from 'vue';
import UiTimerangepicker from 'balm-ui/components/timerangepicker';

// Optional. Overwrite `<ui-timerangepicker>` props with default value.
Vue.use(UiTimerangepicker, {
  // some props
});
```

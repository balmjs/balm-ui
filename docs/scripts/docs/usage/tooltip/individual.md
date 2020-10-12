```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/tooltip/tooltip';
```

```js
import Vue from 'vue';
import UiTooltip from 'balm-ui/components/tooltip';
import vTooltip from 'balm-ui/directives/tooltip'; // Optional

// Optional. Overwrite `<ui-tooltip>` props with default value.
Vue.use(UiTooltip, {
  // some props
});
Vue.directive(vTooltip.name, vTooltip); // Optional
```

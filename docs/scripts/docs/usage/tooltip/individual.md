```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/tooltip/tooltip';
```

```js
import UiTooltip from 'balm-ui/components/tooltip';
import vTooltip from 'balm-ui/directives/tooltip'; // Optional

// `app`: Vue app
// Optional. Overwrite `<ui-tooltip>` props with default value.
app.use(UiTooltip, {
  // some props
});
app.directive(vTooltip.name, vTooltip); // Optional
```

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/button/button';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiButton from 'balm-ui/components/button';
import vButton from 'balm-ui/directives/button'; // Optional

// `app`: Vue app
// Optional. Overwrite `<ui-button>` props with default value.
app.use(UiButton, {
  // some props
});
Vue.directive(vButton.name, vButton); // Optional
```

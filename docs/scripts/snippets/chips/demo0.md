Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-chips>` props with default value.
  UiChips: {
    // some props
  }
});
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/chips.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/icon.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import UiChipsComponents from 'balm-ui/components/chips';

Vue.use(UiChipsComponents, {
  // Optional. Overwrite `<ui-chips>` props with default value.
  UiChips: {
    // some props
  }
});
```

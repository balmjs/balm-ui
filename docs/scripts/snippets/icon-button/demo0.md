Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-icon-button>` and `<ui-icon-a>` props with default value.
  UiIconButton: {
    // some props
  }
});
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/icon-button.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/icon.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import UiIconButtonComponents from 'balm-ui/components/icon-button';

Vue.use(UiIconButtonComponents, {
  // Optional. Overwrite `<ui-icon-button>` and `<ui-icon-a>` props with default value.
  UiIconButton: {
    // some props
  }
});
```

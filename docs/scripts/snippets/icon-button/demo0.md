Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // (Optional) Overwrite <ui-icon-button> props
  UiIconButton: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiIconButton from 'balm-ui/components/icon-button';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage
import 'balm-ui/components/core.css';
import 'balm-ui/components/icon-button.css';
import 'balm-ui/components/icon.css'; // Optional

// (Optional) Overwrite <ui-icon-button> props
UiIconButton.config({
  // some props
});

Vue.component(UiIconButton.name, UiIconButton);
```

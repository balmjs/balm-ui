Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-textfield>` props.
  UiTextfield: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiTextfieldComponents from 'balm-ui/components/textfield';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/textfield.css';
import 'balm-ui/components/icon.css'; // Optional

Vue.use(UiTextfieldComponents, {
  // Optional. Overwrite `<ui-textfield>` props.
  UiTextfield: {
    // some props
  }
});
```

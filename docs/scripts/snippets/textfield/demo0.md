Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-textfield>` props.
  UiTextfield: {
    // some props
  },
  // Optional. Overwrite `<ui-textfield-helptext>` props.
  UiTextfieldHelptext: {
    // some props
  },
  // Optional. Overwrite `<ui-textfield-icon>` props.
  UiTextfieldIcon: {
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

// Optional.
UiTextfieldComponents.config({
  // Overwrite `<ui-textfield>` props.
  UiTextfield: {
    // some props
  },
  // Overwrite `<ui-textfield-helptext>` props.
  UiTextfieldHelptext: {
    // some props
  },
  // Overwrite `<ui-textfield-icon>` props.
  UiTextfieldIcon: {
    // some props
  }
});

for (let key in UiTextfieldComponents) {
  let Component = UiTextfieldComponents[key];
  Vue.component(Component.name, Component);
}
```

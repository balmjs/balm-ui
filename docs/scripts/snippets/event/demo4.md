```html
<ui-button raised @click="balmUI.onShow('open')">Open dialog</ui-button>

<ui-dialog v-model="open">
  <ui-dialog-content>Dialog content</ui-dialog-content>
  <ui-dialog-actions>
    <ui-button @click="balmUI.onHide('open')">Close dialog</ui-button>
  </ui-dialog-actions>
</ui-dialog>
```

```js
import { useEvent } from 'balm-ui';

export default {
  data() {
    return {
      balmUI: useEvent(),
      open: false
    };
  }
};
```

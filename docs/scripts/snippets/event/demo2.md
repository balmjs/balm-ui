```html
<ui-button @click="balmUI.onChange('message', 'Hello BalmUI')">
  Show message
</ui-button>
<ui-button @click="balmUI.onChange('message', '')">Clear</ui-button>

<p>{{ message }}</p>
```

```js
import { useEvent } from 'balm-ui';

export default {
  data() {
    return {
      balmUI: useEvent(),
      message: 'No message'
    };
  }
};
```

```html
<ui-file accept="image/*" @change="balmUI.onChange('files', $event)"></ui-file>
<p>Files: {{ files }}</p>
```

```js
import { useEvent } from 'balm-ui';

export default {
  data() {
    return {
      balmUI: useEvent(),
      files: []
    };
  }
};
```

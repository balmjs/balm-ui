```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/badge/badge';
@use 'balm-ui/components/icon/icon'; // Recommended
```

```js
import UiBadge from 'balm-ui/components/badge';
import vBadge from 'balm-ui/directives/badge'; // Optional

// `app`: Vue app
app.use(UiBadge);
app.directive(vBadge.name, vBadge); // Optional
```

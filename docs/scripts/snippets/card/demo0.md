Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-card>` props.
  UiCard: {
    // some props
  },
  // Optional. Overwrite `<ui-card-media>` props.
  UiCardMedia: {
    // some props
  },
  // Optional. Overwrite `<ui-card-actions>` props.
  UiCardActions: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiCardComponents from 'balm-ui/components/card';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/card.css';

Vue.use(UiCardComponents, {
  // Optional. Overwrite `<ui-card>` props.
  UiCard: {
    // some props
  },
  // Optional. Overwrite `<ui-card-media>` props.
  UiCardMedia: {
    // some props
  },
  // Optional. Overwrite `<ui-card-actions>` props.
  UiCardActions: {
    // some props
  }
});
```

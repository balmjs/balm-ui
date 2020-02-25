Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-card>` props with default value.
  UiCard: {
    // some props
  },
  // Optional. Overwrite `<ui-card-media>` props with default value.
  UiCardMedia: {
    // some props
  },
  // Optional. Overwrite `<ui-card-actions>` props with default value.
  UiCardActions: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiCardComponents from 'balm-ui/components/card';

Vue.use(UiCardComponents, {
  // Optional. Overwrite `<ui-card>` props with default value.
  UiCard: {
    // some props
  },
  // Optional. Overwrite `<ui-card-media>` props with default value.
  UiCardMedia: {
    // some props
  },
  // Optional. Overwrite `<ui-card-actions>` props with default value.
  UiCardActions: {
    // some props
  }
});
```

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/card/card.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/card/card.css" />
  <!-- endbuild -->
  ```

### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

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

### Individual Usage

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/card/card.scss';
```

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

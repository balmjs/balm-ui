Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus);
```

Standalone Usage

```js
import Vue from 'vue';
import UiTextDivider from 'balm-ui/components/text-divider';

Vue.use(UiTextDivider);
```

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/text-divider/text-divider.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/text-divider/text-divider.css" />
  <!-- endbuild -->
  ```

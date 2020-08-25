### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
@use 'balm-ui/components/editor/theme/snow';
@use 'balm-ui/components/editor/theme/bubble';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-editor>` props with default value.
  UiEditor: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/editor/editor';
@use 'balm-ui/components/editor/theme/snow';
@use 'balm-ui/components/editor/theme/bubble';
```

```js
import Vue from 'vue';
import UiEditor from 'balm-ui/components/editor';

// Optional. Overwrite `<ui-editor>` props with default value.
Vue.use(UiEditor, {
  // some props
});
```

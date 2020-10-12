```scss
@use 'balm-ui/dist/balm-ui';
@use 'balm-ui/components/editor/theme/snow';
@use 'balm-ui/components/editor/theme/bubble'; // Optional
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

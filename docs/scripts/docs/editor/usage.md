### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
@use 'balm-ui/components/editor/theme/snow.scss';
@use 'balm-ui/components/editor/theme/bubble.scss';
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

```css
@use 'balm-ui/components/core.scss';
@use 'balm-ui/components/editor/editor.scss';
@use 'balm-ui/components/editor/theme/snow.scss';
@use 'balm-ui/components/editor/theme/bubble.scss';
```

```js
import Vue from 'vue';
import UiEditor from 'balm-ui/components/editor';

// Optional. Overwrite `<ui-editor>` props with default value.
Vue.use(UiEditor, {
  // some props
});
```

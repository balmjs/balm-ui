### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
@use 'balm-ui/components/editor/theme/snow';
@use 'balm-ui/components/editor/theme/bubble'; // Optional
```

```js
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

// `app`: Vue app
app.use(BalmUIPlus, {
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
@use 'balm-ui/components/editor/theme/bubble'; // Optional
```

```js
import UiEditor from 'balm-ui/components/editor';

// `app`: Vue app
// Optional. Overwrite `<ui-editor>` props with default value.
app.use(UiEditor, {
  // some props
});
```

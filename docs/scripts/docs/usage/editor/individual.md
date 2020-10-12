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

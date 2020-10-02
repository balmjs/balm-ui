### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

// `app`: Vue app
app.use(BalmUIPlus, {
  // Optional. Overwrite `$confirm` options.
  $confirm: {
    // some options
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/dialog/dialog';
@use 'balm-ui/plugins/confirm/confirm';
```

```js
import $confirm from 'balm-ui/plugins/confirm';

// `app`: Vue app
// Optional. Overwrite `$confirm` options.
app.use($confirm, {
  // some options
});
```

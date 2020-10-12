<<<<<<< HEAD:docs/scripts/docs/usage/alert-dialog.md
### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

// `app`: Vue app
app.use(BalmUIPlus, {
  // Optional. Overwrite `$alert` options.
  $alert: {
    // some options
  }
});
```

### Individual Usage

=======
>>>>>>> origin/8.x:docs/scripts/docs/usage/alert-dialog/individual.md
```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/dialog/dialog';
@use 'balm-ui/plugins/alert/alert';
```

```js
import $alert from 'balm-ui/plugins/alert';

// `app`: Vue app
// Optional. Overwrite `$alert` options.
app.use($alert, {
  // some options
});
```

<<<<<<< HEAD:docs/scripts/docs/usage/icon-button.md
### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-icon-button>` props with default value.
  UiIconButton: {
    // some props
  }
});
```

### Individual Usage

=======
>>>>>>> origin/8.x:docs/scripts/docs/usage/icon-button/individual.md
```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/icon-button/icon-button';
@use 'balm-ui/components/icon/icon'; // Recommended
```

```js
import UiIconButton from 'balm-ui/components/icon-button';

// `app`: Vue app
// Optional. Overwrite `<ui-icon-button>` props with default value.
app.use(UiIconButton, {
  // some props
});
```

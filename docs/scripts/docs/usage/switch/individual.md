<<<<<<< HEAD:docs/scripts/docs/usage/switch.md
### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-switch>` props with default value.
  UiSwitch: {
    // some props
  }
});
```

### Individual Usage

=======
>>>>>>> origin/8.x:docs/scripts/docs/usage/switch/individual.md
```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/switch/switch';
```

```js
import UiSwitch from 'balm-ui/components/switch';

// `app`: Vue app
// Optional. Overwrite `<ui-switch>` props with default value.
app.use(UiSwitch, {
  // some props
});
```

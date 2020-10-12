<<<<<<< HEAD:docs/scripts/docs/usage/list.md
### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-list>` props with default value.
  UiList: {
    // some props
  }
});
```

### Individual Usage

=======
>>>>>>> origin/8.x:docs/scripts/docs/usage/list/individual.md
```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/list/list';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiListComponents from 'balm-ui/components/list';

// `app`: Vue app
app.use(UiListComponents, {
  // Optional. Overwrite `<ui-list>` props with default value.
  UiList: {
    // some props
  }
});
```

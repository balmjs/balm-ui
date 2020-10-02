- NOTE: You can customize the style for your scale classname (`mdc-typography--<STYLE>`)

  ```scss
  .mdc-typography--custom-style-1 {
    // ...
  }

  .mdc-typography--custom-style-2 {
    // ...
  }
  ```

### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite the param of `$tt()`.
  $typography: ['custom-style-1', 'custom-style-2']
});
```

### Individual Usage

```scss
/* Included `typography.scss` */
@use 'balm-ui/components/core';

/* OR */
@use 'balm-ui/plugins/typography/typography';
```

```js
import $typography from 'balm-ui/plugins/typography';

// `app`: Vue app
// Optional. Overwrite the param of `$tt()`.
app.use($typography, ['custom-style-1', 'custom-style-2']);
```

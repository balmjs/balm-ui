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

- NOTE: Custom global store by Vue `mixins`

  ```js
  // `/path/to/app/scripts/store/index.js`
  export default {
    // name: 'Store',
    mixins: []
  };
  ```

  > NOTE: `'Store'` is default store name (`$store`), and you can customize yours. (e.g. set `name: 'AppStore'`, then using `$appstore`)

### Default Usage

```js
import BalmUI from 'balm-ui';
import myStore from './store';

// `app`: Vue app
app.use(BalmUI, {
  $store: myStore
});
```

### Individual Usage

```js
import $store from 'balm-ui/plugins/store';
import myStore from './store';

// `app`: Vue app
app.use($store, myStore);
```

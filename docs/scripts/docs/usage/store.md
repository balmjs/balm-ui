- NOTE: Custom global store by Vue `mixins`

  ```js
  // `/path/to/app/scripts/store/index.js`
  export default () => {
    return {};
  };
  ```

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

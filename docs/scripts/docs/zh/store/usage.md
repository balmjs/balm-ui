- NOTE: Custom global store by Vue `mixins`

  ```js
  // `/path/to/app/scripts/store/index.js`
  export default {
    // name: 'Store',
    mixins: []
  };
  ```

### Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';
import myStore from './store';

Vue.use(BalmUI, {
  $store: myStore
});
```

### Individual Usage

```js
import Vue from 'vue';
import $store from 'balm-ui/plugins/store';
import myStore from './store';

Vue.use($store, myStore);
```

```js
// `/path/to/app/scripts/store/index.js`
import demo from './demo';

export default {
  mixins: [demo]
};
```

```js
// `/path/to/app/scripts/store/demo.js`
export default {
  data() {
    return {
      demoMenu: []
    };
  },
  methods: {
    async getDemoMenu() {
      this.demoMenu = await this.$http.get('/api/get-menu');
    }
  }
};
```

```js
// `/path/to/awesome.vue`

export default {
  async created() {
    await this.$store.getDemoMenu();
    console.log(this.$store.demoMenu);
  }
};
```

### Use `$store` without `.vue` component

> New in 8.19.0

```js
// `/path/to/awesome.js`

import { useStore } from 'balm-ui';
// OR
// import { useStore } from 'balm-ui/plugins/store';

const $store = useStore();
console.log($store.demoMenu);
```

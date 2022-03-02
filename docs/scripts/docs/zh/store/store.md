```js
// `/path/to/app/scripts/store/index.js`
import useDemoStore from './demo';

export default {
  ...useDemoStore()
};
```

```js
// `/path/to/app/scripts/store/demo.js`
import { reactive, toRefs } from 'vue';
import { useHttp } from '@/plugins/http'; // 例如 axios

const state = reactive({
  demoMenu: []
});

async function getDemoMenu() {
  const $http = useHttp();
  state.demoMenu = await $http.get('/api/get-menu');
}

const useDemoStore = () => {
  return {
    ...toRefs(state),
    getDemoMenu
  };
};

export default useDemoStore;
```

- Composition API

  ```html
  <ui-button @click="store.getDemoMenu">Test</ui-button>
  <ui-divider></ui-divider>
  {{ store.demoMenu }}
  ```

  ```js
  import { onBeforeMount } from 'vue';
  import { useStore } from 'balm-ui';

  export default {
    setup() {
      const store = useStore();

      onBeforeMount(() => {
        store.getDemoMenu();
      });

      return {
        store
      };
    }
  };
  ```

- Options API

  ```html
  <ui-button @click="$store.getDemoMenu">Test</ui-button>
  <ui-divider></ui-divider>
  {{ $store.demoMenu }}
  ```

  ```js
  export default {
    beforeMount() {
      this.$store.getDemoMenu();
    }
  };
  ```

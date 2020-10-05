```js
// `/path/to/app/scripts/store/index.js`
import useDemoStore from './demo';

export default () => {
  return {
    ...useDemoStore()
  };
};
```

```js
// `/path/to/app/scripts/store/demo.js`
import { reactive, toRefs } from 'vue';
import { useHttp } from '@/plugins/http';

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

```js
// `/path/to/app.vue`
export default {
  async mounted() {
    await this.$store.getDemoMenu();
    console.log(this.$store.demoMenu);
  }
};
```

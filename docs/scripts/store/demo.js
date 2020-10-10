import { reactive, toRefs } from 'vue';
import { useHttp } from '@/plugins/http';

const state = reactive({
  demoMenu: []
});

async function getDemoMenu() {
  const $http = useHttp();
  state.demoMenu = await $http.get('/data/table.json');
}

const useDemoStore = () => {
  return {
    ...toRefs(state),
    getDemoMenu
  };
};

export default useDemoStore;

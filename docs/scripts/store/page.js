import { reactive, toRefs } from 'vue';

const state = reactive({
  serviceWorker: null,
  isFirstLoad: true
});

const usePageStore = () => {
  return {
    ...toRefs(state)
  };
};

export default usePageStore;

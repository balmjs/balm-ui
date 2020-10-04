import { ref } from 'vue';

const isFirstLoad = ref(true);

const usePageStore = () => {
  return {
    isFirstLoad
  };
};

export default usePageStore;

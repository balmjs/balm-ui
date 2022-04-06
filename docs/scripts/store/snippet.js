import { ref } from 'vue';
import { loadAsset } from '@/utils';

const demos = ref([]);

async function initSnippet(name, count) {
  demos.value = []; // reset

  if (name !== 'utils' && count) {
    demos.value = [''];

    for (let i = 1; i <= count; i++) {
      const filename = `snippets/${name}/demo${i}.md`;
      const code = await loadAsset(filename);

      demos.value.push(code);
    }
  }
}

const useSnippetStore = () => {
  return {
    demos,
    initSnippet
  };
};

export default useSnippetStore;

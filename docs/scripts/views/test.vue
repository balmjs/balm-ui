<template>
  <ui-button @click="store.getDemoMenu">Test</ui-button>
  <ui-divider></ui-divider>
  {{ store.demoMenu }}
</template>

<script>
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
// export default {
//   beforeMount() {
//     this.$store.getDemoMenu();
//   }
// };
</script>

<style></style>

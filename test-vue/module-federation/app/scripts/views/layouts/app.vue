<template>
  <img :src="logo" alt />
  <hello></hello>
</template>

<script>
import Hello from '@/views/components/hello';
import logo from '@/assets/logo.png';

export default {
  name: 'App',
  components: {
    Hello
  },
  setup() {
    return {
      logo
    };
  }
};
</script>

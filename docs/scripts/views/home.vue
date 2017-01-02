<template>
  <div class="docs-home" v-html="docs"></div>
</template>

<script>
import docs from '../docs/install.md';

export default {
  data() {
    return {
      docs: docs
    };
  }
};
</script>

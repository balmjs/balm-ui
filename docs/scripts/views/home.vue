<template>
  <div class="docs-home">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
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

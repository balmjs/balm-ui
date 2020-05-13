<template>
  <div :class="[$tt('body1'), 'page--utils']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
    </div>
  </div>
</template>

<script>
import docs from '@/docs/utils/intro.md';

export default {
  metaInfo: {
    titleTemplate: '%s - Utilities'
  },
  data() {
    return {
      docs
    };
  }
};
</script>

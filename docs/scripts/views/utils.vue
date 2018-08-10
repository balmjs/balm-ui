<template>
  <div :class="[$tt('body1'), 'demo--utils']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
    </div>
  </div>
</template>

<script>
import docs from '../apidocs/utils.md';

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


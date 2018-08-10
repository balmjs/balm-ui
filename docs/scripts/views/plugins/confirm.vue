<template>
  <div :class="[$tt('body1'), 'demo--confirm']">
    <section class="hero plugin">
      <h2 :class="$tt('headline4')">
        $confirm
      </h2>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Confirm'
  },
  mixins: [snippets],
  created() {
    this.showCode('confirm');
  }
};
</script>

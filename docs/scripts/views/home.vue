<template>
  <div :class="[$tt('body1'), 'demo--home']">
    <section class="hero" v-ripple.unbounded>
      <h2 :class="$tt('headline4')">
        Next Generation Material UI for Vue.js
      </h2>
    </section>
    <div :class="[$tt('body2'), 'quick-start']">
      <ui-markdown :text="docs"></ui-markdown>
    </div>
  </div>
</template>

<script>
import docs from '../docs/quick-start.md';

export default {
  data() {
    return {
      docs
    };
  }
};
</script>

<template>
  <div class="demo--home">
    <section class="hero" v-ripple.unbounded>
      <h2 :class="$tt('headline4')">
        Next Generation Material UI for Vue.js
      </h2>
    </section>
    <ui-markdown class="quick-start" :text="docs"></ui-markdown>
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

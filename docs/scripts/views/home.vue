<template>
  <div class="demo--home">
    <section class="hero">
      <h2 :class="$tt('headline4')">
        BalmUI@next<br><br>Coming Up...
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

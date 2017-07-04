<template>
  <div class="demo--home">
    <section class="hero">
      <h2 :class="typography('display1')">
        BalmUI@next<br><br>Coming Soon...
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

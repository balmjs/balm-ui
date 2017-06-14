<template>
  <div class="demo--home">
    <!-- <ui-markdown :text="docs"></ui-markdown> -->
    <section class="hero">
      <h2 :class="typography('display1')">BalmUI@next<br><br>Coming Soon...</h2>
    </section>
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

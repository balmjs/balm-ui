<template>
  <ui-page-structure name="circular-progress" demoCount="2">
    <template #hero>
      <ui-circular-progress active fourColored></ui-circular-progress>
    </template>

    <!-- Content -->
    <section class="example">
      <h6 :class="$tt('headline6')">1.1 Indeterminate</h6>
      <figure>
        <ui-circular-progress active></ui-circular-progress>
      </figure>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="example">
      <h6 :class="$tt('headline6')">1.2 Determinate</h6>
      <figure>
        <ui-circular-progress :progress="progress">{{
          progress
        }}</ui-circular-progress>
        <figcaption>Progress: {{ progress }}</figcaption>
      </figure>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Circular Progress'
  },
  data() {
    return {
      progress: 0,
      timer: null
    };
  },
  mounted() {
    this.setProgress();
  },
  methods: {
    setProgress() {
      this.timer = setInterval(() => {
        if (this.progress === 1) {
          clearInterval(this.timer);
          this.progress = 0;
          this.setProgress();
        } else {
          this.progress += 0.1;
          this.progress = +this.progress.toFixed(2);
        }
      }, 1e3);
    }
  }
};
</script>

<template>
  <ui-page name="circular-progress" demo-count="2">
    <template #hero>
      <ui-circular-progress active four-colored></ui-circular-progress>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Indeterminate</h6>
      <div class="demo">
        <ui-circular-progress active></ui-circular-progress>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Determinate</h6>
      <div class="demo">
        <ui-circular-progress :progress="progress">{{ progress }}</ui-circular-progress>
        <p>Progress: {{ progress }}</p>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </ui-page>
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

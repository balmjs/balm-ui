<template>
  <docs-page name="progress" demo-count="1">
    <template #hero>
      <ui-progress active></ui-progress>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">Linear Progress Indicators</h6>
      <div class="demo">
        <figure class="example">
          <ui-progress :progress="progress"></ui-progress>
          <figcaption>Determinate (Progress: {{ progress }})</figcaption>
        </figure>

        <figure class="example">
          <ui-progress active></ui-progress>
          <figcaption>Indeterminate</figcaption>
        </figure>

        <figure class="example">
          <ui-progress :progress="0.5" :buffer="0.75"></ui-progress>
          <figcaption>Buffer</figcaption>
        </figure>

        <figure class="example">
          <ui-progress reversed :progress="0.5"></ui-progress>
          <figcaption>Reversed</figcaption>
        </figure>

        <figure class="example">
          <ui-progress active reversed></ui-progress>
          <figcaption>Indeterminate Reversed</figcaption>
        </figure>

        <figure class="example">
          <ui-progress reversed :progress="0.5" :buffer="0.75"></ui-progress>
          <figcaption>Buffer Reversed</figcaption>
        </figure>

        <figure class="example">
          <ui-progress class="demo-progress--custom" :progress="0.5" :buffer="0.75"></ui-progress>
          <figcaption>Custom Colors with Buffer</figcaption>
        </figure>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Progress'
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

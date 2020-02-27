<template>
  <ui-page-structure name="linear-progress" demoCount="1">
    <template #hero>
      <ui-linear-progress indeterminate></ui-linear-progress>
    </template>

    <!-- Content -->
    <section>
      <h6 :class="$tt('headline6')">Linear Progress Indicators</h6>
      <figure class="linear-progress-demo">
        <ui-linear-progress :progress="progress"></ui-linear-progress>
        <figcaption>Determinate (Progress: {{ progress }})</figcaption>
      </figure>

      <figure class="linear-progress-demo">
        <ui-linear-progress indeterminate></ui-linear-progress>
        <figcaption>Indeterminate</figcaption>
      </figure>

      <figure class="linear-progress-demo">
        <ui-linear-progress
          progress="0.5"
          data-buffer="true"
          buffer="0.75"
        ></ui-linear-progress>
        <figcaption>Buffer</figcaption>
      </figure>

      <figure class="linear-progress-demo">
        <ui-linear-progress reversed progress="0.5"></ui-linear-progress>
        <figcaption>Reversed</figcaption>
      </figure>

      <figure class="linear-progress-demo">
        <ui-linear-progress indeterminate reversed></ui-linear-progress>
        <figcaption>Indeterminate Reversed</figcaption>
      </figure>

      <figure class="linear-progress-demo">
        <ui-linear-progress
          reversed
          progress="0.5"
          data-buffer="true"
          buffer="0.75"
        ></ui-linear-progress>
        <figcaption>Buffer Reversed</figcaption>
      </figure>

      <figure class="linear-progress-demo">
        <ui-linear-progress
          class="demo-linear-progress--custom"
          progress="0.5"
          data-buffer="true"
          buffer="0.75"
        ></ui-linear-progress>
        <figcaption>Custom Colors with Buffer</figcaption>
      </figure>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Linear Progress'
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

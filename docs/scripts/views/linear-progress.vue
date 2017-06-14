<template>
  <div class="demo--linear-progress">
    <section class="hero">
      <ui-linear-progress indeterminate></ui-linear-progress>
    </section>

    <section>
      <fieldset>
        <legend class="mdc-typography--title">Linear Progress Indicators</legend>

        <figure class="linear-progress-demo">
          <ui-linear-progress :progress="progress"></ui-linear-progress>
          <figcaption>Determinate</figcaption>
        </figure>

        <figure class="linear-progress-demo">
          <ui-linear-progress indeterminate></ui-linear-progress>
          <figcaption>Indeterminate</figcaption>
        </figure>

        <figure class="linear-progress-demo">
          <ui-linear-progress progress="0.5" data-buffer="true" buffer="0.75"></ui-linear-progress>
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
          <ui-linear-progress reversed progress="0.5" data-buffer="true" buffer="0.75"></ui-linear-progress>
          <figcaption>Buffer Reversed</figcaption>
        </figure>

        <figure class="linear-progress-demo">
          <ui-linear-progress accent progress="0.5"></ui-linear-progress>
          <figcaption>Accent</figcaption>
        </figure>

      </fieldset>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0
    };
  },
  created() {
    setInterval(() => {
      if (this.progress < 1) {
        this.progress += 0.1;
      } else {
        this.progress = 0;
      }
    }, 1000);
  }
};
</script>
